import React, { useState } from 'react';
import EditGameCard from './EditGameCard';

const GameCard = ({ game, gameCard }) => {
	const [ visible, setVisible ] = useState(false);

	console.log(game);
	console.log(gameCard);
	function editGameCard(e) {
		e.preventDefault();
		fetch(`gamecards/${gameCard.id}`, {
			method: 'PATCH',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({})
		})
			.then((res) => {
				console.log(res);
			})
			.then((data) => console.log(data));
	}

	{
		return (
			<div>
				<h1>{game.title}</h1>
				<img key={game.id} src={game.image} alt="Image for gamecard" />
				<h2>Dungeon: {gameCard.level_data}</h2>
				<img key={gameCard.user_id} src={gameCard.image} />
				<h3>{gameCard.note}</h3>
				<button onClick={() => setVisible(!visible)}>{visible ? 'Cancel' : 'Edit GameCard'}</button>
				{visible && <div>Hello</div>}
			</div>
		);
	}
};

export default GameCard;
