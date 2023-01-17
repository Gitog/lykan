import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  cart: [],
  allProducts: [],
  products: []
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToProducts: (state, action) => {
      state.products = [...action.payload]
    },
    addToAllProducts: (state, action) => {
      state.allProducts = [...action.payload]
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    removeFromCart:(state, action) => {
      const filteredCart = state.cart.filter(item => item.id !== action.payload.id)
      state.cart = [...filteredCart]
    },
    searchItem:(state, action) => {
      const filteredProducts = state.allProducts.filter(item => (
        item.name.toLowerCase().includes(action.payload?.toLowerCase())))
        state.products = [...filteredProducts]
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  addToCart, removeFromCart, searchItem, addToProducts, addToAllProducts
} = productSlice.actions

export default productSlice.reducer