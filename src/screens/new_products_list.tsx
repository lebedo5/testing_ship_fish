import React, { useCallback, useEffect, useState } from 'react';
import { useFiltersProductMutation, useGetProductsQuery } from "../store/apiSlice";
import Search from "../components/search/search";
import { headerBlock } from "../const/const";

const NewProductList = () => {
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
			case "title":
				const filteringList = list?.filter((item: any) => item.title === val)
				setList(filteringList)
				break;
			case "price_lower":
				newList.sort((a: any, b: any) => {
						return	a.price - b.price
				})
				setList(newList)
				break;
			case "price_higher":
				newList.sort((a: any, b: any) => {
					return b.price - a.price
				})
				setList(newList)
				break;
			case "rating_lower":
				newList.sort((a: any, b: any) => {
					return	a.price - b.price
				})
				setList(newList)
				break;
			case "rating_higher":
				newList.sort((a: any, b: any) => {
					return b.price - a.price
				})
				setList(newList)
				break;
			case "stock_lower":
				newList.sort((a: any, b: any) => {
					return	a.price - b.price
				})
				setList(newList)
				break;
			case "stock_higher":
				newList.sort((a: any, b: any) => {
					return b.price - a.price
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
				<Search search={search} setSearch={setSearch} />
				<div className={"clear_filters_button"}>
					<button className={"button_text"} onClick={clearList}>Clear Filters</button>
				</div>
				{list ? <div className={"header"}>
					{headerBlock.map(({ name, children, notClickable }, index) => {
						return (
							<div key={`item-${index}`}>
								<p className={`filter_title ${notClickable && 'not_clickable_label'} label`}>
									{name}
								</p>
								{children && <div style={{ flexDirection: "row", display: "flex", justifyContent: 'space-between' }}>
									{children.map(({ title, actionVal }, index) => (
										<p key={`item-${index}`} style={{ width: "45%", textAlign: 'center', marginTop: 10 }} className={"label"} onClick={() => filtering("", actionVal)}>{title}</p>
									))}
                </div>}
							</div>
						)
					})}
					{list?.map((item : any) => {
						return (
							<>
								<p className={'filter_title'}>{item?.id}</p>
								<p onClick={() => filtering(item?.title, "title")}  className={'filter_title link'}>{item?.title}</p>
								<div style={{ overflow: "scroll", height: 150 }}>
									<p className={'filter_title'}>{item?.description}</p>
								</div>
								<p className={'filter_title'}>{item?.price}</p>
								<div style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>
									<img src={item?.thumbnail} style={{ height: 100, }} />
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

export default NewProductList;

