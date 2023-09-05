import React, { useState } from 'react';
import Search from "../components/search/search";
import { useGetProductsQuery } from "../store/apiSlice";
import ProductCard from "../components/product_card/productCard";
import { Link } from 'react-router-dom';

const Home = () => {
	const [search, setSearch] = useState("");
	const { data } = useGetProductsQuery(search);

	return (
		<div className={"home_root"}>
			<h1 className={"home_root-title"}>Testing work Sheep Fish</h1>
			<Search search={search} setSearch={setSearch} />
			<Link to="/products_table">
				<div className={"table_list_button"}>Products in table</div>
			</Link>
			<div className={"product_list"}>
				{data?.products?.map((item: any, index: number) => <ProductCard key={`item-${index}`} item={item}/>)}
			</div>

			<Link to="/create_product">
				<div className={'add_new_product_button'}>
					<svg fill="#ffffff" version="1.1" width={20} height={20} viewBox="0 0 45.402 45.402">
						<g>
							<path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
								c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
								c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
								c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
						</g>
					</svg>
				</div>
			</Link>
		</div>
	);
};

export default Home;
