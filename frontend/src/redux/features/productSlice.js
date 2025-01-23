import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    allProducts: []
}
const URL = "http://localhost:5000/api/products"


export const getData = createAsyncThunk("getProduct", async () => {
    const { data } = await axios.get(URL)
    return data.products
})




export const addData = createAsyncThunk("addProduct", async (product) => {
    const { data } = await axios.post(URL, product)
    return data
})

export const deleteData = createAsyncThunk("deleteData", async (id) => {
    const { data } = await axios.delete(`${URL}/${id}`)
    return id
})


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        sortLow: (state) => {
            state.products = state.products.sort((a, b) => a.price - b.price)
        },
        sortHigh: (state) => {
            state.products = state.products.sort((a, b) => b.price - a.price)
        },
        searchInput: (state, action) => {
            state.products = state.allProducts.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase().trim()))
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.products = action.payload
            state.allProducts = action.payload
        }),
            builder.addCase(addData.fulfilled, (state, action) => {
                state.products.push(action.payload)
            }),
            builder.addCase(deleteData.fulfilled, (state, action) => {
                state.products = state.products.filter((item) => item._id !== action.payload)
            })
    }
})

// Action creators are generated for each case reducer function
export const { sortLow, sortHigh, searchInput } = productSlice.actions

export default productSlice.reducer