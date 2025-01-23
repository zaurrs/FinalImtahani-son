import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.products = action.payload
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
export const { } = productSlice.actions

export default productSlice.reducer