import React from "react";
import Search from "./Search";
import ToggleCart from "./toggleCart";

const Navbar = () => {
	return (
		<div className='navbar'>
			<a href='/'>E-Cart</a>
			<Search />

			<ToggleCart />
		</div>
	);
};

export default Navbar;
