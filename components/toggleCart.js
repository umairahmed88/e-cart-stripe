import React, { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import Cart from "./Cart";

const ToggleCart = () => {
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const { cartItems, removeFromCart, clearCart, updateCartItemQuantity } =
		useCart();

	const toggleDropdown = () => {
		setDropdownVisible(!isDropdownVisible);
	};

	const totalCost = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div>
			<div className='cart-icon cursor-pointer' onClick={toggleDropdown}>
				<span>
					Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
				</span>
				{isDropdownVisible ? "x" : ""}
			</div>
			{isDropdownVisible && (
				<div className='cart-dropdown'>
					{cartItems && cartItems.length > 0 ? (
						<Cart
							cartItems={cartItems}
							removeFromCart={removeFromCart}
							updateCartItemQuantity={updateCartItemQuantity}
							totalCost={totalCost}
							clearCart={clearCart}
						/>
					) : (
						<p>Your cart is empty.</p>
					)}
				</div>
			)}
		</div>
	);
};

export default ToggleCart;

// import React, { useState } from "react";
// import { useCart } from "@/contexts/CartContext";
// import Cart from "./Cart";
// import { CartProvider } from "@/contexts/CartContext"; // Import `CartProvider`

// const ToggleCart = () => {
// 	const [isDropdownVisible, setDropdownVisible] = useState(false);
// 	const { cartItems, removeFromCart, clearCart, updateCartItemQuantity } =
// 		useCart();

// 	const toggleDropdown = () => {
// 		setDropdownVisible(!isDropdownVisible);
// 	};

// 	const totalCost = cartItems.reduce(
// 		(total, item) => total + item.price * item.quantity,
// 		0
// 	);

// 	return (
// 		<div>
// 			<div className='cart-icon cursor-pointer' onClick={toggleDropdown}>
// 				<span>
// 					Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
// 				</span>
// 				{isDropdownVisible ? "x" : ""}
// 			</div>
// 			{isDropdownVisible && (
// 				<div className='cart-dropdown'>
// 					{cartItems && cartItems.length > 0 ? (
// 						<Cart
// 							cartItems={cartItems}
// 							removeFromCart={removeFromCart}
// 							updateCartItemQuantity={updateCartItemQuantity}
// 							totalCost={totalCost}
// 							clearCart={clearCart}
// 						/>
// 					) : (
// 						<p>Your cart is empty.</p>
// 					)}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default () => (
// 	<CartProvider>
// 		<ToggleCart />
// 	</CartProvider>
// );
