import React from "react";
import CartItem from "./CartItem";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
	const {
		cartItems,
		removeFromCart,
		clearCart,
		updateCartItemQuantity,
		totalCost,
	} = useCart();

	return (
		<div className='cart-container'>
			{cartItems.map((item) => (
				<CartItem
					key={item.id}
					item={item}
					removeFromCart={removeFromCart}
					updateCartItemQuantity={updateCartItemQuantity}
				/>
			))}
			<div className='cart-summary'>
				{totalCost > 0 && (
					<>
						<div className='total-cost'>
							Total Cost: ${totalCost.toFixed(2)}
						</div>
						<button onClick={clearCart}>Clear Cart</button>
					</>
				)}
				<hr />
				<Link href='/cart' legacyBehavior>
					<a className='visit-cart-button'>Visit Cart</a>
				</Link>
			</div>
		</div>
	);
};

export default Cart;
