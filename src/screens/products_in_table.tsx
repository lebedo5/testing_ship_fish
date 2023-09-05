import React, { useCallback, useEffect, useState } from 'react';
import { useFiltersProductMutation, useGetProductsQuery } from "../store/apiSlice";
import Search from "../components/search/search";
import { headerBlock } from "../const/const";

const ProductListInTable = () => {
	const [search, setSearch] = useState("");
	const { data } = useGetProductsQuery(search);
	const [list, setList] = useState(data?.products)

	const [filtersProduct] = useFiltersProductMutation()

	useEffect(
		useCallback(() => {
			if(search) {
				setList(data?.products)
			}
		}, [search])
	)

	const filtering = async (val: string, key: string) => {
		setSearch("")
		const newList: any[] = [...data?.products]
		switch (key) {
			case "category":
				const result: any = await filtersProduct(val)
				setList(result?.data?.products)
				break;
			case "id":
				setList(newList?.filter((item: { id: string }) => item.id === val))
				break;
			case "title":
				setList(newList?.filter((item: { title: string }) => item.title === val))
				break;
			case "price_lower":
				newList.sort((a: { price: number }, b: { price: number }) => {
						return	a.price - b.price
				})
				setList(newList)
				break;
			case "price_higher":
				newList.sort((a: { price: number }, b: { price: number }) => {
					return b.price - a.price
				})
				setList(newList)
				break;
			case "rating_lower":
				newList.sort((a: { rating: number }, b: { rating: number }) => {
					return	a.rating - b.rating
				})
				setList(newList)
				break;
			case "rating_higher":
				newList.sort((a: { rating: number }, b: { rating: number }) => {
					return b.rating - a.rating
				})
				setList(newList)
				break;
			case "stock_lower":
				newList.sort((a: { stock: number }, b: { stock: number }) => {
					return	a.stock - b.stock
				})
				setList(newList)
				break;
			case "stock_higher":
				newList.sort((a: { stock: number }, b: { stock: number }) => {
					return b.stock - a.stock
				})
				setList(newList)
				break;
		}
	}

	const clearList = () => {
		setList(data?.products)
	}

	return (
		<div>
			<div className={"list_products"}>
				<h1 className={"list_products-title"}>Products in Table</h1>
				<Search search={search} setSearch={setSearch} />
				<div className={"clear_filters_button"}>
					<button className={"button_text"} onClick={clearList}>Reset Filters</button>
				</div>
				{list ? <div className={"products_wrap"}>
					{headerBlock.map(({ name, children, notClickable }, index) => {
						return (
							<div key={`item-${index}`}>
								<p className={`filter_title ${notClickable && 'not_clickable_label'} label`}>
									{name}
								</p>
								{children && <div className={"children_header_block"}>
									{children.map(({ title, actionVal }, index) => (
										<p key={`item-${index}`}
										   className={"label children_header_block-text"}
										   onClick={() => filtering("", actionVal)}>{title}</p>
									))}
                </div>}
							</div>
						)
					})}
					{list?.map((item : any) => {
						return (
							<>
								<p onClick={() => filtering(item?.id, "id")}  className={'filter_title link'}>{item?.id}</p>
								<p onClick={() => filtering(item?.title, "title")}  className={'filter_title link'}>{item?.title}</p>
								<div className={"description_block"}>
									<p className={'filter_title'}>{item?.description}</p>
								</div>
								<p className={'filter_title'}>{item?.price}</p>
								<div className={"image_block"}>
									<img src={item?.thumbnail} className={"img"} />
								</div>
								<p className={'filter_title'}>{item?.rating}</p>
								<p className={'filter_title'}>{item?.stock}</p>
								<p onClick={() => filtering(item?.category, "category")} className={'filter_title link'}>{item?.category}</p>
							</>
						)
					})}
				</div> : <div className={"empty_list_block"}>
					<p className={"empty_list_block-text"}>Empty List</p>
				</div>}
			</div>
		</div>
	);
};

export default ProductListInTable;

