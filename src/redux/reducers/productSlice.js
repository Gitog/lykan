import axios from 'axios'
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (thunkAPI) => {
    const response = await axios.get('http://localhost:3000/categories')
    return response.data
  })

export const initialState = {
  cart: [],
  allProducts: [],
  products: [],
  categories: [],
  total: [],
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
    },
    addToCategories: (state, action) => {
      state.categories = [...action.payload]
    }

    // decrement: (state) => {
    //   state.value -= 1
    // },
    // increment: (state, action) => {
    //   state.value += action.payload
    // },

  },
  // incrementCart: (state, action) => {
  //   const newProducts = state.cart.map((item) => {
  //     if (item.id === action.payload.id)
  //     item.quantity = item.quantity + 1
  //   }
  //     return item;
  //   }
  //   ));
  //   state.cart = [...newProducts];
  //   const total = state.cart.reduce(
  //     (currentTotal, item) => currentTotal + item.quantity * item.price);
  //     state.total = total
  //   ), 


  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = [...action.payload]  
    })
  }
})

// Action creators are generated for each case reducer function
export const { 
  addToCart, removeFromCart, searchItem, addToProducts, addToAllProducts, addToCategories
} = productSlice.actions

export default productSlice.reducer