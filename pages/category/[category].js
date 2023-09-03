import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import categoriesData from "@/data/categoriesData";

const CategoryPage = () => {
	const router = useRouter();
	const { category } = router.query;

	const items = categoriesData[category];

	if (!items) {
		return <div>Category not found</div>;
	}

	return (
		<div>
			<h2>{category} Category</h2>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<Link href={`/category/${category}/${item.id}`} legacyBehavior>
							<a>{item.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CategoryPage;
