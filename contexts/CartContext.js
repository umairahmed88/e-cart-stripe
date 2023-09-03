import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
	return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
		setCartItems(storedCart);
	}, []);

	const saveCartToStorage = (cart) => {
		localStorage.setItem("cartItems", JSON.stringify(cart));
	};

	const addToCart = (product) => {
		const existingItem = cartItems.find((item) => item.id === product.id);

		if (existingItem) {
			const updatedCart = cartItems.map((item) =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			);
			setCartItems(updatedCart);
			saveCartToStorage(updatedCart);
		} else {
			const newCart = [...cartItems, { ...product, quantity: 1 }];
			setCartItems(newCart);
			saveCartToStorage(newCart);
		}
	};

	const removeFromCart = (productId) => {
		const updatedCart = cartItems.filter((item) => item.id !== productId);
		setCartItems(updatedCart);
		saveCartToStorage(updatedCart);
	};

	const clearCart = () => {
		setCartItems([]);
		saveCartToStorage([]);
	};

	const updateCartItemQuantity = (productId, quantityChange) => {
		const updatedCart = cartItems.map((item) =>
			item.id === productId
				? { ...item, quantity: Math.max(0, item.quantity + quantityChange) }
				: item
		);
		setCartItems(updatedCart);
		saveCartToStorage(updatedCart);
	};

	const totalCost = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				clearCart,
				updateCartItemQuantity,
				totalCost,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
