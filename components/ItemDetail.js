import React from "react";
import categoriesData from "@/data/categoriesData";
import { useRouter } from "next/router";

const ItemDetail = () => {
	const router = useRouter();
	const { id } = router.query;

	// Find the item in any category data using the provided ID
	let item = null;
	for (const categoryKey in categoriesData) {
		const categoryData = categoriesData[categoryKey];
		item = categoryData.find((product) => product.id === id);
		if (item) {
			break;
		}
	}

	if (!item) {
		return <div>Item not found</div>;
	}

	return (
		<div>
			<h2>{item.title}</h2>
			<img alt={item.text} src={item.image} width={"500px"} />
			<p>Price: ${item.price}</p>
			<p>Description: {item.description}</p>
			{/* Render other relevant details */}
		</div>
	);
};

export default ItemDetail;
