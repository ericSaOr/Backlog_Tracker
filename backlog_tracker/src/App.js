import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import GameContainer from './GameContainer';
import NavBar from './Navbar';
import Profile from './Profile';
import GameCard from './Gamecard';
import About from './About';
import { Route, Switch } from 'react-router-dom';

function App() {
	const [ errors, setErrors ] = useState(false);
	const [ user, setUser ] = useState(false);

	useEffect(() => {
		fetch('/me').then((response) => {
			if (response.ok) {
				response.json().then((user) => setUser(user));
			}
		});
	}, []);

	if (!user) return <Login setUser={user} setErrors={setErrors} />;

	fetch('https://rawg-video-games-database.p.rapidapi.com/games/Xenogears?key=627e46aeb3c04002ba754c38fde257d0', {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
			'x-rapidapi-key': '07db0a293emsh92c59a3f091bfe3p173434jsn9ed539e19de8'
		}
	})
		.then((response) => response.json())
		.then((games) => console.log(games));


	return (
		<div>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Login />
				</Route>
				<Route exact path="/signup">
					<Signup />
				</Route>,
				<Route exact path="/profile">
					<Profile />
				</Route>,
				<Route exact path="/gamecontainer">
					<GameContainer />
				</Route>,
				<Route exact path="/gamecard">
					<GameCard />
				</Route>
				<Route exact path="/About">
					<About />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
