import categoriesData from "@/data/categoriesData";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isSearching, setIsSearching] = useState(false); // New state variable

	const router = useRouter();
	const querySearchTerm = router.query.term;

	const filteredResults = Object.values(categoriesData)
		.flatMap((data) => data)
		.filter(
			(item) =>
				item.category &&
				item.category.toLowerCase() === querySearchTerm?.toLowerCase()
		);

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearch = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			setIsSearching(true); // Set isSearching to true when search is performed
			router.push({
				pathname: "/search",
				query: { term: searchTerm },
			});
		}
	};

	return (
		<div>
			<div className='search-bar'>
				<input
					type='text'
					placeholder='Search...'
					value={searchTerm}
					onChange={handleInputChange}
					onKeyPress={handleSearch}
				/>
			</div>
			{isSearching && filteredResults.length > 0 && (
				<h1>Search Results for: {querySearchTerm}</h1>
			)}
			{isSearching ? (
				filteredResults.length > 0 ? (
					filteredResults.map((item) => (
						<div key={item.id}>
							<h2>{item.title}</h2>
							<p>{item.description}</p>
							<img src={item.image} alt={item.title} />
							<p>Price: {item.price}</p>
							<p>Deal Offer: {item.dealOffer}</p>
							<p>Category: {item.category}</p>
						</div>
					))
				) : (
					<p>No results found</p>
				)
			) : null}
		</div>
	);
};

export default Search;
