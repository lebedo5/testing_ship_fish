import { configureStore } from "@reduxjs/toolkit";
import { newProductSlice } from './productsSlice'
import { apiSlice } from "./apiSlice";
export const store = configureStore({
	reducer: {
		newProduct: newProductSlice.reducer,
		[apiSlice.reducerPath]: apiSlice.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware)
})
