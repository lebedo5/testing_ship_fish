import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../const/const";
// fetch('https://dummyjson.com/products/category/smartphones')
// 	.then(res => res.json())
// 	.then(console.log);

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: (search) => `products/search?q=${search}`,
		}),
		getProduct: builder.query({
			query: (id) => `products/${id}`,
		}),
		createNewProduct: builder.mutation({
			query: ({ newProduct }) => (
				{
					url: "products/add",
					method: "POST",
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(newProduct)
				}
			)
		}),
		updateProduct: builder.mutation({
			query: ({ productId, updateData }) => (
				{
					url: `products/${productId}`,
					method: "PATCH",
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(updateData)
				}
			)
		}),
		deleteProduct: builder.mutation({
			query: (productId) => (
				{
					url: `products/${productId}`,
					method: 'DELETE',
				}
			)
		}),
		filtersProduct: builder.mutation({
			query: (category) => ( `products/category/${category}`)
		}),
	})
})

export const { useGetProductsQuery, useCreateNewProductMutation, useUpdateProductMutation, useDeleteProductMutation, useFiltersProductMutation } = apiSlice;
