import { configureStore } from '@reduxjs/toolkit'
import productSlice from './reducers/productSlice'
import authSlice from './reducers/authSlice'

 const store = configureStore({
    reducer: {
        products: productSlice,
        auth: authSlice,
    },
  })

  export default store;