import React, { useState } from 'react';

function GameViewer({ gameResults, sessionUser, game }) {
	const [ levelData, setLevelData ] = useState('');
	const [ gameImage, setGameImage ] = useState('');
	const [ gameCard, setGamecard ] = useState([]);

	// console.log(gameResults.results.id);
	console.log(sessionUser);

	function handleImageInput(e) {
		setGameImage(e.target.value);
	}

	function handleLevelData(e) {
		setLevelData(e.target.value);
	}

	function handleAddGameCard(e) {
		e.preventDefault();

		fetch(`/gamecards`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				title: `${gameResults.results.map((gameResult) => gameResult.name)}`,

				image: `${gameImage}`,

				level_data: `${levelData}`,

				game_id: game.id,

				user_id: sessionUser.id
			})
		})
			.then((res) => res.json())
			.then((json) => setGamecard(json));
	}

	return (
		<div className="gamecard-container">
			{gameResults.results ? (
				gameResults.results.map((gameResult) => {
					return (
						<div>
							<h2>{gameResult.name}</h2>
							<img key={gameResult.id} src={gameResult.background_image} alt="screenshot of game" />
							<p>Type in your game note here.</p>
							<input className="gamecard-textbox" onChange={handleLevelData} type="text" />
							<p>Paste an image of the level you're in.</p>
							<input className="gamecard-imagebox" onChange={handleImageInput} type="text" />
							<p>Submit that sucker!</p>
							<input type="submit" onClick={handleAddGameCard} />
						</div>
					);
				})
			) : (
				'Games belong here!'
			)}
		</div>
	);
}

export default GameViewer;
