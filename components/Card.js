import React from "react";

const Card = ({ cardData }) => (
	<div>
		<ul className='my-2 ml-1 bg-white m-1'>
			<h1 className='text-lg font-bold p-3'>{cardData.title}</h1>
			<div className='grid grid-cols-2'>
				{cardData.map((card, idx) => (
					<div key={idx} className='p-1 text-xs'>
						<a href={card.link}>
							<li>
								<img
									alt={card.text}
									src={card.image}
									className='w-40 h-48 p-2'
								/>
							</li>
							<p className='p-2'>{card.title}</p>
						</a>
					</div>
				))}
				<div className='justify-start m-2 text-blue-800 cursor-pointer'>
					<a href={cardData.link}>{cardData.SeeMoreText}</a>
				</div>
			</div>
		</ul>
	</div>
);

export default Card;
