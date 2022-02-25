import React from 'react';
import './GameBoard.css';
import CardsUtil, { CardDeck } from '../../CardsUtil';
import ScoreCard from '../ScoreCard/ScoreCard';

function GameBoard(props) {
	return (
		<div>
			{/* <CardDeck /> */}
			<ScoreCard />
		</div>
	);
}

export default GameBoard;
