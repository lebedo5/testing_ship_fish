import React, { CSSProperties, Dispatch, SetStateAction } from "react";
import { updateDataProps } from "../product_card/productCard";

interface EditInputProps {
	edit: boolean
	className: string
	style?: CSSProperties
	inputName: string
	setProductData: Dispatch<SetStateAction<updateDataProps>>
	productData: any
}

const EditInput = ({ edit, className, style, inputName, setProductData, productData }: EditInputProps) => {

	const onChange = async (val: string) => {
		const copy: any = Object.assign({}, productData);
		copy[inputName] = val;
		setProductData(copy);
	};

	return (
		<>
			{edit ? <input className={className} style={style} value={productData[inputName]} onChange={(e) => onChange(e.target.value)} /> :
				<p className={className}>{productData[inputName]}</p>}
		</>
	)
}

export default EditInput
