import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Results({ gameResults }) {
	const [ gameTitle, setGameTitle ] = useState('');
	const [ gameImage, setGameImage ] = useState('');
	const [ games, setGames ] = useState([]);

	const history = useHistory();
	console.log(gameResults.results);

	function handleAddGame(e) {
		e.preventDefault();

		fetch(`/games`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				title: `${gameResults.results.map((gameResult) => gameResult.name)}`,

				image: `${gameResults.results.map((gameResult) => gameResult.background_image)}`
			})
		})
			.then((res) => res.json())
			.then((json) => setGames(json), history.push('/gameviewer'));
	}

	console.log(games);
	return (
		<div className="game-results-container">
			{gameResults.results ? (
				gameResults.results.map((gameResult) => {
					return (
						<div>
							<h2>{gameResult.name}</h2>
							<img key={gameResult.id} src={gameResult.background_image} alt="screenshot of game" />
							<button onClick={handleAddGame}>Add Game</button>
						</div>
					);
				})
			) : (
				'Search for a game!'
			)}
		</div>
	);
}
export default Results;
