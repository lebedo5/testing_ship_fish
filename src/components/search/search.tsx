import React, { Dispatch, SetStateAction } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
interface SearchProps {
	setSearch: Dispatch<SetStateAction<string>>
	search: string
}

const Search = ({ setSearch, search }: SearchProps ) => {
	const resetSearch = () => {
		setSearch("")
	}

	return (
		<div className={"search_component"}>
			<div className={"search_component-input-container"}>
				{Boolean(search) ? <div onClick={resetSearch} className={"close_icon_block"}>
					<IoCloseSharp />
				</div> :
					<div className={"search_icon_block"}>
					<BiSearch/>
				</div>}
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className={"search_input"}
				/>
			</div>
		</div>
	);
};

export default Search;
