import React from 'react';
import './GameBoard.css';
import ScoreCard from '../ScoreCard/ScoreCard';

function GameBoard(props) {
	// --------------------------------- DECK CREATION --------------------------------- //

	// CREATE 52 card deck

	class Cards {
		constructor(suit, rank, score, src) {
			this.suit = suit;
			this.rank = rank;
			this.score = score;
			this.src = src;
		}
	}

	const suits = ['CLUB', 'DIAMOND', 'HEART', 'SPADE'];
	const ranks = [
		'A',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
	];

	// INITIALIZE J, Q, K cards with value of '10', A '11'

	const score = {
		A: 11,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
		7: 7,
		8: 8,
		9: 9,
		10: 10,
		J: 10,
		Q: 10,
		K: 10,
	};
	// ---------------------------------- IMG SRC ---------------------------------- //
	// SUIT - RANK

	// card source images: https://totalnonsense.com/open-source-vector-playing-cards/

	//create an 8 decks of 52 cards
	let EightDecks = [];

	//create 8 card deck
	for (let j = 0; j < 8; j++) {
		for (let i = 0; i < suits.length; i++) {
			for (let z = 0; z < ranks.length; z++) {
				EightDecks.push(
					new Cards(
						suits[i],
						ranks[z],
						score[ranks[z]],
						`../../cards/${suits[i]}-${ranks[z]}.svg`
					)
				);
			}
		}
	}

	console.log(EightDecks);

	return (
		<div>
			<img src='../../cards/CLUB-10.svg' alt='card' />
			<div>{EightDecks[1].src}</div>
			<ScoreCard />
		</div>
	);
}

export default GameBoard;
