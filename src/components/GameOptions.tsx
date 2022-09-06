import React from 'react';

const GameOptions = () => {
	return (
		<div className="w-5/6 md:max-w-[650px] bg-white-main p-6 md:p-12 rounded-2xl">
			<p className="text-xsm font-bold text-medium-gray pb-2">Select Theme</p>
			<div className="flex columns-2 gap-4 lg:gap-8">
				<button className="option-button">Numbers</button>
				<button className="option-button">Icons</button>
			</div>
			<p className="text-xsm font-bold text-medium-gray pb-2 pt-2 mt-4">Number of Players</p>
			<div className="flex columns-4 gap-2 lg:gap-8">
				<button className="option-button">1</button>
				<button className="option-button">2</button>
				<button className="option-button">3</button>
				<button className="option-button">4</button>
			</div>
			<p className="text-xsm font-bold text-medium-gray pb-2 pt-2 mt-4">Grid Size</p>
			<div className="columns-2 flex gap-4 lg:gap-8">
				<button className="option-button">4x4</button>
				<button className="option-button">6x6</button>
			</div>
			<button className="option-button mt-6 bg-orange-dark hover:bg-orange-dark">Start Game</button>
		</div>
	);
};

export default GameOptions;
