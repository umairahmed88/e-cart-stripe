import React from "react";
import AddToCart from "@/components/AddToCart";
import categoriesData from "@/data/categoriesData";

const Sports = () => {
	return (
		<div>
			<AddToCart addItemData={categoriesData.sportsData} />
		</div>
	);
};

export default Sports;
