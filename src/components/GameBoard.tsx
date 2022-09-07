import React from 'react';

const GameBoard = () => {
	const arrayOfNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex != 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	shuffle(arrayOfNumbers);
	console.log(arrayOfNumbers);

	return (
		<div className="w-full h-full px-5 flex justify-center items-center">
			<div className="w-full grid overflow-hidden grid-cols-4 grid-rows-4 gap-2 xs:gap-4 sm:gap-3 max-w-[375px] md:max-w-[425px]">
				{arrayOfNumbers.map((number, index) => {
					return (
						<div key={index} className="circle-number">
							{number}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default GameBoard;
