import React, { useState } from 'react';

function GameContainer() {
	//
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ gameResults, setGameResults ] = useState([]);

	function handleChange(e) {
		setSearchTerm(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		let slug = searchTerm.split(' ').join('-').toLocaleLowerCase();

		setGameResults([]);
		fetch(
			`https://rawg-video-games-database.p.rapidapi.com/games?page_size=1&search${slug}&key=5d0b880d0a3448d5a26a296d0dbf0244`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
					'x-rapidapi-key': '07db0a293emsh92c59a3f091bfe3p173434jsn9ed539e19de8'
				}
			}
		)
			.then((response) => response.json())
			.then((games) => console.log(games));
	}
	return (
		<div className="game-search">
			<h1>Game Search</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={searchTerm} onChange={handleChange} />
				<br />
				<input type="submit" />
			</form>
		</div>
	);
}

export default GameContainer;
