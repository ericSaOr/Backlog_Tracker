import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import GameContainer from './GameContainer';
import NavBar from './Navbar';
import Profile from './Profile';
import GameCard from './Gamecard';
import About from './About';
import GameViewer from './GameViewer';
import { Route, Switch, useHistory } from 'react-router-dom';

function App({ games }) {
	const [ errors, setErrors ] = useState(false);
	const [ sessionUser, setSessionUser ] = useState(false);
	const history = useHistory();
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ user, setUser ] = useState([]);
	const [ loginErrors, setLoginErrors ] = useState({});

	useEffect(() => {
		fetch('/me').then((response) => {
			if (response.ok) {
				response.json().then((res) => setSessionUser(res));
			}
		});
	}, []);

	function handleSignOut() {
		setSessionUser(false);
		sessionStorage.clear();

		return 0;
	}

	function handleSignIn(e) {
		e.preventDefault();
		console.log('FIRED');
		const user = {
			user_name: username,
			password
		};
		fetch(`/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.error) {
					setLoginErrors(json.error);
				} else {
					setErrors(false);
					setUser(json);
					window.location.reload(false);
					//reload page from cache
				}
			});
		return 0;
	}

	console.log(sessionUser);
	console.log(errors);

	function logOut() {
		fetch('/logout', {
			method: 'DELETE'
		}).then(handleSignOut());
		return 0;
	}

	{
		sessionUser ? history.push('/gamecontainer') : history.push('/');
		//conditionally rendering components based on the session.
	}

	return (
		<div>
			<NavBar
				setUsername={setUsername}
				setPassword={setPassword}
				handleSignOut={handleSignOut}
				sessionUser={sessionUser}
				logOut={logOut}
			/>
			<Switch>
				<Route exact path="/">
					<Login
						setErrors={setErrors}
						setUsername={setUsername}
						setPassword={setPassword}
						handleSignIn={handleSignIn}
						user={user}
					/>
				</Route>
				<Route exact path="/signup">
					<Signup />
				</Route>,
				<Route exact path="/profile">
					<Profile />
				</Route>,
				<Route exact path="/gamecontainer">
					<GameContainer sessionUser={sessionUser} />
				</Route>,
				<Route exact path="/gamecard">
					<GameCard />
				</Route>
				<Route exact path="/About">
					<About />
				</Route>
				<Route exact path="/gameviewer">
					<GameViewer games={games} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
