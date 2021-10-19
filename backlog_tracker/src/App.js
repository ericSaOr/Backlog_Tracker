import './App.css';
import React from 'react';
import Login from './Login';
import Signup from './Signup';
import GameContainer from './GameContainer';
import NavBar from './Navbar';
import Profile from './Profile';
import GameCard from './Gamecard';
import About from './About';
import { Route, Switch } from 'react-router-dom';

function App() {
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
