import React from "react";
import AddToCart from "@/components/AddToCart";
import categoriesData from "@/data/categoriesData";

const Fashion = () => {
	return (
		<div>
			<AddToCart addItemData={categoriesData.fashionData} />
		</div>
	);
};

export default Fashion;
