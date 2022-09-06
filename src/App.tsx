import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Start from './views/Start';
import Game from './views/Game';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/game" element={<Game />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
