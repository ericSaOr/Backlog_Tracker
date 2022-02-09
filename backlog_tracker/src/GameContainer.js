import React, { useState } from 'react';
import Results from './Results';
import { useHistory } from 'react-router-dom';

function GameContainer({ sessionUser, handleAddGame, gameResults, setGameResults, game, setGame, setIsGame, isGame }) {
	//
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ gamePresent, setGamePresent ] = useState(false);

	const history = useHistory();

	function handleChange(e) {
		setSearchTerm(e.target.value);
	}

	function isGamePresent() {
		setGamePresent(true);
	}

	console.log(game);

	function onSubmit(e) {
		e.preventDefault();
		let slug = searchTerm.split(' ').join('-').toLocaleLowerCase();

		fetch(
			`https://rawg-video-games-database.p.rapidapi.com/games?page_size=1&search=${slug}&key=5d0b880d0a3448d5a26a296d0dbf0244`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
					'x-rapidapi-key': '07db0a293emsh92c59a3f091bfe3p173434jsn9ed539e19de8'
				}
			}
		)
			.then((response) => response.json())
			.then((games) => setGameResults(games));
	}

	function handleAddGame() {
		fetch(`/games`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				title: `${gameResults.results.map((gameResult) => gameResult.name)}`,

				image: `${gameResults.results.map((gameResult) => gameResult.background_image)}`
			})
		})
			.then((res) => res.json())
			.then((json) => setGame(json));
		setIsGame(true);
	}

	{
		!isGame ? console.log('No Game') : history.push('/gameviewer');
	}

	console.log(game);
	return (
		<div className="game-search">
			<h1>Game Search</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={searchTerm} onChange={handleChange} />
				<br />
				<input type="submit" />
			</form>
			<Results gameResults={gameResults} sessionUser={sessionUser} game={game} handleAddGame={handleAddGame} />
		</div>
	);
}

export default GameContainer;
