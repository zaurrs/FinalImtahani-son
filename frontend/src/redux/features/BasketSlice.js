import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basket: [],
}


export const basketSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            const existProduct = state.basket.find((item) => item._id === action.payload._id)
            if (!existProduct) {
                state.basket.push({ ...action.payload, count: 1 })
            } else {
                existProduct.count += 1
            }
        },
        deleteBasket: (state, action) => {
            state.basket = state.basket.filter((item) => item._id !== action.payload)
        },
        plusBtn: (state, action) => {
            const existProduct = state.basket.find((item) => item._id === action.payload._id)
            existProduct.count += 1
        },
        minusBtn: (state, action) => {
            const existProduct = state.basket.find((item) => item._id === action.payload._id)
            if (existProduct.count > 1) {
                existProduct.count -= 1
            }
        }
    },

})

// Action creators are generated for each case reducer function
export const { addBasket, deleteBasket, plusBtn, minusBtn} = basketSlice.actions

export default basketSlice.reducer