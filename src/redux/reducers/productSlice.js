import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  cart: []
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    removeFromCart:(state, action) => {
      const filteredCart = state.cart.filter(item => item.id !== action.payload.id)
      state.cart = [...filteredCart]
    }
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = productSlice.actions

export default productSlice.reducer