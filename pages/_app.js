import React from "react";
import { CartProvider } from "../contexts/CartContext";
import "../app/globals.css";
import Navbar from "@/components/Navbar";
import { ScrollToTopButton } from "@/components/button";

function MyApp({ Component, pageProps }) {
	return (
		<CartProvider>
			<Navbar />
			<Component {...pageProps} />
			<ScrollToTopButton />
		</CartProvider>
	);
}

export default MyApp;

// import React from "react";
// import { CartProvider } from "../contexts/CartContext";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import "../app/globals.css";
// import Navbar from "@/components/Navbar";
// import { ScrollToTopButton } from "@/components/button";
// import CheckoutForm from "./CheckoutForm";

// const stripePromise = loadStripe("pk_test_laoYK4YVZTLqGGZ898Nza4qS00546jnVST");

// function MyApp({ Component, pageProps }) {
// 	return (
// 		<CartProvider>
// 			<Navbar />
// 			<Elements stripe={stripePromise}>
// 				<Component {...pageProps} />
// 				<CheckoutForm />
// 			</Elements>
// 			<ScrollToTopButton />
// 		</CartProvider>
// 	);
// }

// export default MyApp;
