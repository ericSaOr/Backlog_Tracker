import React from 'react';

function Results({ gameResults, handleAddGame }) {
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
// gameResults={gameResults}
// 				handleAddGame={handleAddGame}
// 				setGame={setGame}
// 				game={game}
// 				setGameimage={setGameimage}
// 				image={image}
