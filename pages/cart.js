import React from "react";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";
import { Cart } from "@/components";

const CartPage = () => {
	const {
		cartItems,
		removeFromCart,
		clearCart,
		updateCartItemQuantity,
		totalCost,
	} = useCart();

	return (
		<div className='cart-page'>
			<h1>Your Cart</h1>
			<Cart
				cartItems={cartItems}
				removeFromCart={removeFromCart}
				updateCartItemQuantity={updateCartItemQuantity}
				totalCost={totalCost}
				clearCart={clearCart}
			/>
		</div>
	);
};

export default CartPage;
