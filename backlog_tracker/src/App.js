import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import GameContainer from './GameContainer';
import NavBar from './Navbar';
import Profile from './Profile';
import GameCard from './Gamecard';
import About from './About';
import { Route, Switch, useHistory } from 'react-router-dom';

function App({ user }) {
	const [ errors, setErrors ] = useState(false);
	const [ sessionUser, setSessionUser ] = useState(false);
	const history = useHistory();
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	useEffect(() => {
		fetch('/me').then((response) => {
			if (response.ok) {
				response.json().then((res) => setSessionUser(res));
			}
		});
	}, []);

	if (!sessionUser) {
		history.push('/');
	}

	function handleSignOut() {
		setUsername(null);
		setPassword(null);
		return 0;
	}

	// fetch('https://rawg-video-games-database.p.rapidapi.com/games/Xenogears?key=627e46aeb3c04002ba754c38fde257d0', {
	// 	method: 'GET',
	// 	headers: {
	// 		'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
	// 		'x-rapidapi-key': '07db0a293emsh92c59a3f091bfe3p173434jsn9ed539e19de8'
	// 	}
	// })
	// 	.then((response) => response.json())
	// 	.then((games) => console.log(games));
	console.log(username);
	console.log(user);
	console.log(sessionUser);
	return (
		<div>
			<NavBar
				username={username}
				setUsername={setUsername}
				setPassword={setPassword}
				handleSignOut={handleSignOut}
				user={sessionUser}
			/>
			<Switch>
				<Route exact path="/">
					<Login setErrors={setErrors} setUsername={setUsername} setPassword={setPassword} />
				</Route>
				<Route exact path="/signup">
					<Signup />
				</Route>,
				<Route exact path="/profile">
					<Profile />
				</Route>,
				<Route exact path="/gamecontainer">
					<GameContainer username={username} />
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
