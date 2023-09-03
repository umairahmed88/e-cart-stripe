import React from "react";
import { Card } from "@/components";
import indexData from "@/data/indexData";

const HomePage = () => {
	return (
		<div>
			<div className='product-list flex flex-wrap'>This is HomePage</div>
			<Card cardData={indexData} />
			<Card cardData={indexData} />
		</div>
	);
};

export default HomePage;
