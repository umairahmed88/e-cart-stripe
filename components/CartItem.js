import React from "react";

const CartItem = ({ item, removeFromCart, updateCartItemQuantity }) => {
	return (
		<div className='cart-item'>
			<div className='item-info'>
				<div className='item-image flex'>
					<img src={item.image} alt={item.name} width={"50px"} />
					<div className='item-details'>
						<span>{item.title}</span>
						<div className='quantity-controls'>
							<button
								onClick={() => {
									if (item.quantity > 1) {
										updateCartItemQuantity(item.id, -1);
									} else {
										removeFromCart(item.id);
									}
								}}
							>
								-
							</button>
							<span>{item.quantity}</span>
							<button onClick={() => updateCartItemQuantity(item.id, 1)}>
								+
							</button>
						</div>
						<div className='item-cost'>
							Price: {item.quantity} * ${item.price.toFixed(2)} = $
							{(item.quantity * item.price).toFixed(2)}
						</div>
						<button onClick={() => removeFromCart(item.id)}>Remove</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
