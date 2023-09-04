import React, { useState } from 'react';
import { useDeleteProductMutation, useUpdateProductMutation } from "../../store/apiSlice";
import EditInput from "../edit_input/edit_input";

export interface ProductCardProps {
	item: {
		id: string
		title: string
		thumbnail: string
		brand: string
		category: string
		description: string
		price: number
		rating: number
		stock: number
	}
}

export interface updateDataProps {
	title: string
	description: string
	price: number
	rating: number
}

const ProductCard = ({ item }: ProductCardProps) => {
	const { id, title, thumbnail, description, price, rating, brand, category } = item
	const [productData, setProductData] = useState<updateDataProps>({
		title: title,
		price: price,
		description: description,
		rating: rating,
	})

	const [editButton, setEditButton] = useState<boolean>(false)
	const [updateProduct] = useUpdateProductMutation()
	const [deleteProduct, deleteItem] = useDeleteProductMutation()

	const editProduct = () => {
		setEditButton(true)
	}
	const update = () => {
		setEditButton(false)
		try {
			updateProduct({ productId: id, updateData: productData })
			alert("update product ok")
		} catch (e) {
			console.log("update product", e)
		}
	}

	const deleteProd = async () => {
		try {
			await deleteProduct(id)
			alert("delete product ok")
		} catch (e) {
			console.log('delete product', e)
		}
	}

	return deleteItem?.data?.isDeleted && deleteItem?.data?.id === id ? null : (
		<div className={"product_card_wrap product_card"}>
			<div className={"brand-block"}>
				<p className={"brand-block-brand label"}>{brand}</p>
				<p className={"brand-block-category label"}>{category}</p>
			</div>
			<div className={"image_block"}>
				<img src={thumbnail} className={"image_block-image"}/>
			</div>
			<EditInput
				setProductData={setProductData}
				inputName={"title"}
				productData={productData}
				value={title}
				className={"product_card-title"}
				edit={editButton}
			/>
			<p className={"product_card-price"}>Price: 	$
				<EditInput
					setProductData={setProductData}
					productData={productData}
					inputName={"price"}
					value={price}
					className={"number"}
					edit={editButton}
				/>
			</p>
			<p className={"product_card-rating"}>Rating:
				<EditInput
					setProductData={setProductData}
					productData={productData}
					inputName={"rating"}
					value={rating}
					className={"number rating"}
					edit={editButton}
				/>
			</p>
			<EditInput
				setProductData={setProductData}
				productData={productData}
				inputName={"description"}
				value={description}
				className={"product_card-description"}
				edit={editButton}
				style={{ width: "100%" }}
			/>
			<div className={"button_block"}>
				{editButton ? <div onClick={update} className={"button_block-update button"}>Update</div> :
					<>
						<div onClick={editProduct} className={"button_block-edit button"}>Edit</div>
						<div onClick={deleteProd} className={"button_block-delete button"}>Delete</div>
					</>
				}
			</div>
		</div>
	);
};

export default ProductCard;
