import {createSelector} from '@reduxjs/toolkit'
import { initialState } from './productSlice'

const selectSlice = (state)=> state || initialState

export const selectCart = createSelector([selectSlice], state => state.cart)