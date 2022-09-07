import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface gameState {
	gameSettings: {
		theme: 'icons' | 'numbers';
		numOfPlayers: 1 | 2 | 3 | 4;
		gridSize: '4x4' | '6x6';
	};
}

const initialState: gameState = {
	gameSettings: {
		theme: 'numbers',
		numOfPlayers: 1,
		gridSize: '4x4',
	},
};

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<'icons' | 'numbers'>) => {
			state.gameSettings.theme = action.payload;
		},
		setNumOfPlayers: (state, action: PayloadAction<1 | 2 | 3 | 4>) => {
			state.gameSettings.numOfPlayers = action.payload;
		},
		setGridSize: (state, action: PayloadAction<'4x4' | '6x6'>) => {
			state.gameSettings.gridSize = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setTheme, setNumOfPlayers, setGridSize } = gameSlice.actions;

export default gameSlice.reducer;
