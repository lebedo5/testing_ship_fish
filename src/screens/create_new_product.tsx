import { Field, Form, Formik } from "formik";
import { SignupSchema } from "../utils/sheme";
import ErrorInput from "../components/form_input_error/form_input_error";
import { useCreateNewProductMutation } from "../store/apiSlice";
import { useDispatch } from "react-redux";
import { newProductSlice } from "../store/productsSlice";
import React, { useState } from "react";
interface Values {
	product_name: string;
	creator: string;
	rating: number | null;
	yearPublication: string;
}

const CreateNewProduct = () => {
	const dispatch = useDispatch()
	const [initialValues, setInitialValues] = useState({
		product_name: '',
		creator: '',
		rating: 1,
		yearPublication: '',
	});
	const [createNewProduct] = useCreateNewProductMutation()

	const onCreateNewProduct = async ({ creator, product_name, rating, yearPublication }: Values) => {
		const newProduct = {
			title: product_name,
			rating: Number(rating),
			description: "Descriptionss",
			price: 345,
			photo: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
			stock: 456,
			category: "smartphone"
		}

		try {
			await createNewProduct({ newProduct: newProduct })
			dispatch(newProductSlice.actions.addProductItem({ product: {
				_id: Math.floor(Math.random() * 100),
				yearPublication,
				creator,
				newProduct
			} }))
			setInitialValues({
				product_name: '',
				creator: '',
				rating: 0,
				yearPublication: '',
			})
			alert("Success create new product")
		} catch (e) {
			alert("error")
		}
	}

	return (
		<div className={"create_product_wrap"}>
			<Formik
				initialValues={initialValues}
				validationSchema={SignupSchema}
				onSubmit={(values: Values) => {
					onCreateNewProduct(values)
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className={"form_block"}>
							<label className={"form_label"} htmlFor="product_name">Product Name</label>
							<Field
								className={`form_input 
								${Boolean(errors.product_name && touched.product_name) ? 'error_input' : "active_input"}`}
								id="product_name"
								name="product_name"
								placeholder="iPhone"
							/>
							<ErrorInput
								value={Boolean(errors.product_name && touched.product_name)}
								message={errors.product_name}
							/>

							<label className={"form_label"} htmlFor="creator">Creator</label>
							<Field
								className={`form_input 
								${Boolean(errors.product_name && touched.product_name) ? 'error_input' : "active_input"}`}
								id="creator"
								name="creator"
								placeholder="Joen"
							/>
							<ErrorInput
								value={Boolean(errors.creator && touched.creator)}
								message={errors.creator}
							/>

							<label className={"form_label"} htmlFor="rating">rating</label>
							<Field
								id="rating"
								name="rating"
								placeholder="1-10"
								className={`form_input 
								${Boolean(errors.product_name && touched.product_name) ? 'error_input' : "active_input"}`}
							/>
							<ErrorInput
								value={Boolean(errors.rating && touched.rating)}
								message={errors.rating}
							/>


							<label className={"form_label"} htmlFor="yearPublication">Year Publication</label>
							<Field
								id="yearPublication"
								name="yearPublication"
								placeholder="1995"
								className={`form_input 
								${Boolean(errors.product_name && touched.product_name) ? 'error_input' : "active_input"}`}
							/>
							<ErrorInput
								value={Boolean(errors.yearPublication && touched.yearPublication)}
								message={errors.yearPublication}
							/>

							<button type="submit" className={"form_button"}>Submit</button>
						</div>
					</Form>
				)
				}
			</Formik>
		</div>
	)
}

export default CreateNewProduct
