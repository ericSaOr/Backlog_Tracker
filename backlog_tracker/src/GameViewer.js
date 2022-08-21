import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const GameViewer = ({ gameResults, game, sessionUser, gameCard, setGamecard, setIsgamecard, isGamecard }) => {
	const [ levelData, setLevelData ] = useState('');
	const [ gameImage, setGameImage ] = useState('');
	const [ gameNote, setGameNote ] = useState('');

	const history = useHistory();
	const gameId = game.id;
	console.log(gameId);

	console.log(game);
	function handleImageInput(e) {
		setGameImage(e.target.value);
	}

	function handleLevelData(e) {
		setLevelData(e.target.value);
	}

	function handleGameNote(e) {
		setGameNote(e.target.value);
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

				note: `${gameNote}`,

				game_id: gameId,

				user_id: sessionUser.id
			})
		})
			.then((res) => res.json())
			.then((json) => setGamecard(json));
		setIsgamecard(true);
	}

	{
		isGamecard ? history.push('/gamecard') : console.log('no gamecard');
	}
	console.log(gameCard);
	return (
		<div className="gamecard-container">
			{gameResults.results ? (
				gameResults.results.map((gameResult) => {
					return (
						<div>
							<h2>{gameResult.name}</h2>
							<img key={gameResult.id} src={gameResult.background_image} alt="screenshot of game" />
							<p>What Level Are You In?</p>
							<input className="gamecard-notebox" onChange={handleLevelData} type="text" />
							<p>Type in your game note here.</p>
							<input className="gamecard-textbox" onChange={handleGameNote} type="text" />
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
};

export default GameViewer;
