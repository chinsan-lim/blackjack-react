import C2 from '../src/cards/2C.svg'

function CardsUtil() {
	class Cards {
		constructor(suit, rank, score, src) {
			this.suit = suit;
			this.rank = rank;
			this.score = score;
			this.src = src;
		}
	}

	const suits = ['C', 'D', 'H', 'S'];
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
						`../../cards/${ranks[z]}${suits[i]}.svg`
					)
				);
			}
		}
	}

	console.log(EightDecks);
	return <div></div>;
}

CardsUtil();

export const CardDeck = {};
