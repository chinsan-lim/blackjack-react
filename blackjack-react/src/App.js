import './App.css';
import { createContext, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import GameBoard from './Components/GameBoard/GameBoard';
import ScoreCard from './Components/ScoreCard/ScoreCard';
import HowToPlay from './Components/HowToPlay/HowToPlay';

export const CardsContext = createContext('');

function App() {
	const [playerHand, setPlayerHand] = useState('');
	const [dealerHand, setDealerHand] = useState('');

	return (
		<div className='App'>
			<CardsContext.Provider
				value={{ playerHand, setPlayerHand, dealerHand, setDealerHand }}>
				<Header />
				<GameBoard />
				<ScoreCard />
			</CardsContext.Provider>
			<Routes>
				<Route path='/howtoplay' element={<HowToPlay />} />
				{/* <Route path="/newgame" element={<GameBoard />} /> */}
			</Routes>
		</div>
	);
}

export default App;
