import './App.css';
import { createContext, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import Header from './Components/Header/Header';
import GameBoard from './Components/GameBoard/GameBoard';
import ScoreCard from './Components/ScoreCard/ScoreCard';

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
		</div>
	);
}

export default App;
