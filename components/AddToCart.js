import React from "react";
import { useRouter } from "next/router";
import { useCart } from "../contexts/CartContext";

const AddToCart = ({ addItemData }) => {
	const { addToCart } = useCart();
	const router = useRouter();

	const handleViewDetails = (productId) => {
		router.push(`/itemDetailPage?id=${productId}`);
	};

	return (
		<div>
			<div className='product-list flex flex-wrap'>
				{addItemData.map((product) => (
					<div key={product.id} className='product'>
						<img alt={product.text} src={product.image} width={"100px"} />
						<div className='grid grid-flow-row'>
							<h2>{product.title}</h2>
							<p>Price: ${product.price}</p>
							<button onClick={() => addToCart(product)}>Add to Cart</button>
							<a
								className='cursor-pointer'
								onClick={() => handleViewDetails(product.id)}
							>
								View Details
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AddToCart;
