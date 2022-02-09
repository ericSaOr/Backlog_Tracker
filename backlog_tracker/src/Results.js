import React from 'react';
import { useHistory } from 'react-router-dom';

function Results({ game, gameResults, handleAddGame }) {
	const history = useHistory();
	console.log(game);

	// {
	// 	handleAddGame ? history.push('/gamecontainer') : history.push('/');
	// 	//conditionally rendering components based on the session.
	// }

	return (
		<div className="game-results-container">
			{gameResults.results ? (
				gameResults.results.map((gameResult) => {
					return (
						<div>
							<h2>{gameResult.name}</h2>
							<img key={gameResult.id} src={gameResult.background_image} alt="screenshot of game" />
							<button onClick={(() => handleAddGame())}>Add Game</button>
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
