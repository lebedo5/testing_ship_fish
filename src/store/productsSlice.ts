import { createSlice } from "@reduxjs/toolkit";
interface initialStateProps {
	newProducts: any[]
}

const initialState: initialStateProps = {
	newProducts: [],
}
export const newProductSlice = createSlice({
	name: 'newProducts',
	initialState,
	reducers: {
		addProductItem: (state, action) => {
			state.newProducts.push(action.payload.product);
		},
	},
})
