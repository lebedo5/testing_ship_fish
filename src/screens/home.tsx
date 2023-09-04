import React, { useState } from 'react';
import Search from "../components/search/search";
import { useGetProductsQuery } from "../store/apiSlice";
import ProductCard from "../components/product_card/productCard";
import { Link } from 'react-router-dom';

const Home = () => {
	const [search, setSearch] = useState("");
	const { data } = useGetProductsQuery(search);
	// const paginationList = new Array(Math.floor(data?.total / data?.limit))

	return (
		<div className={"home_root"}>
			<h1 className={"home_root-title"}>Testing work Sheep Fish</h1>
			<Search search={search} setSearch={setSearch} />
			<Link to="/new_product">
				<div className={"table_list_button"}>Product in table</div>
			</Link>
			<div className={"product_list"}>
				{data?.products?.map((item: any, index: number) => <ProductCard key={`item-${index}`} item={item}/>)}
			</div>

			<Link to="/create_product">
				<div className={'add_new_product_button'}>
					<p className={'add_new_product_button-text'}>
					  +
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Home;
