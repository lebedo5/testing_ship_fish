import React, { CSSProperties, Dispatch, SetStateAction, useMemo, useState } from "react";
import { updateDataProps } from "../product_card/productCard";

interface EditInputProps {
	value: string | number
	edit: boolean
	className: string
	style?: CSSProperties
	inputName: string
	setProductData: Dispatch<SetStateAction<updateDataProps>>
	productData: any
}

const EditInput = ({ value, edit, className, style, inputName, setProductData, productData }: EditInputProps) => {

	const onChange = async (val: string) => {
		const copy: any = Object.assign({}, productData);
		copy[inputName] = val;
		setProductData(copy);
	};

	return (
		<>
			{edit ? <input className={className} style={style} value={productData[inputName] || value} onChange={(e) => onChange(e.target.value)} /> : <p className={className}>{value}</p>}
		</>
	)
}

export default EditInput
