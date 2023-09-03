import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTopButton = () => {
	const [showButton, setShowButton] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.pageYOffset;
		setShowButton(scrollPosition > 0);
	};

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{showButton && (
				<button
					className='fixed bottom-4 right-4 p-3 bg-white border-2 border-[#B70F23] hover:bg-[#B70F23] hover:text-white text-black rounded-full shadow-lg'
					onClick={handleScrollToTop}
				>
					<AiOutlineArrowUp />
				</button>
			)}
		</>
	);
};

const BackButton = () => {
	const handleGoBack = () => {
		window.history.back();
	};

	return (
		<button
			className='fixed top-24 md:right-10 right-4 p-2 md:p-4 bg-white border-2 border-[#B70F23] hover:bg-[#B70F23] hover:text-white text-black rounded-full shadow-lg'
			onClick={handleGoBack}
		>
			Back
		</button>
	);
};

export { ScrollToTopButton, BackButton };
