import React from 'react';
// Redux
import { setNumOfPlayers, setTheme, setGridSize } from '../redux/slices/gameSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
// Router
import { Link } from 'react-router-dom';

const GameOptions = () => {
	const dispatch = useAppDispatch();

	const { theme, numOfPlayers, gridSize } = useAppSelector((state) => state.game.gameSettings);

	return (
		<div className="w-5/6 md:max-w-[650px] bg-white-main p-6 md:p-12 rounded-2xl">
			<p className="text-xsm font-bold text-medium-gray pb-2">Select Theme</p>
			<div className="flex columns-2 gap-4 lg:gap-8">
				<button
					className={`option-button ${theme === 'numbers' ? 'bg-medium-blue pointer-events-none' : ''}`}
					onClick={() => dispatch(setTheme('numbers'))}
				>
					Numbers
				</button>
				<button
					className={`option-button ${theme === 'icons' ? 'bg-medium-blue pointer-events-none' : ''}`}
					onClick={() => dispatch(setTheme('icons'))}
				>
					Icons
				</button>
			</div>
			<p className="text-xsm font-bold text-medium-gray pb-2 pt-2 mt-4">Number of Players</p>
			<div className="flex columns-4 gap-2 lg:gap-8">
				<button
					className={`option-button ${numOfPlayers === 1 ? 'bg-medium-blue pointer-events-none' : ''}`}
					onClick={() => dispatch(setNumOfPlayers(1))}
				>
					1
				</button>
				<button
					className={`option-button ${numOfPlayers === 2 ? 'bg-medium-blue pointer-events-none' : ''}`}
					onClick={() => dispatch(setNumOfPlayers(2))}
				>
					2
				</button>
				<button
					className={`option-button ${numOfPlayers === 3 ? 'bg-medium-blue pointer-events-none' : ''}`}
					onClick={() => dispatch(setNumOfPlayers(3))}
				>
					3
				</button>
				<button
					className={`option-button ${numOfPlayers === 4 ? 'bg-medium-blue pointer-events-none' : ''}`}
					onClick={() => dispatch(setNumOfPlayers(4))}
				>
					4
				</button>
			</div>
			<p className="text-xsm font-bold text-medium-gray pb-2 pt-2 mt-4">Grid Size</p>
			<div className="columns-2 flex gap-4 lg:gap-8">
				<button
					className={`option-button ${gridSize === '4x4' ? 'bg-medium-blue pointer-events-none' : ''}`}
					onClick={() => dispatch(setGridSize('4x4'))}
				>
					4x4
				</button>
				<button
					className={`option-button ${gridSize === '6x6' ? 'bg-medium-blue pointer-events-none' : ''}`}
					onClick={() => dispatch(setGridSize('6x6'))}
				>
					6x6
				</button>
			</div>
			<Link to={'/game'}>
				<button className="option-button mt-6 bg-orange-light hover:bg-orange-dark">Start Game</button>
			</Link>
		</div>
	);
};

export default GameOptions;
