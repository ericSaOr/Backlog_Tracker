import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const linkStyles = {
	width: '100px',
	padding: '12px',
	margin: '0 6px 6px',
	background: 'blue',
	textDecoration: 'none',
	color: 'white'
};

function NavBar({ handleSignOut, user }) {
	const history = useHistory();

	function logOut() {
		fetch('/logout', {
			method: 'DELETE'
		}).then(handleSignOut());
		return 0;
	}
	console.log(user);

	return (
		<div>
			<h3>Welcome, Username:{user.user_name}!</h3>
			<NavLink
				to="/"
				exact
				style={linkStyles}
				activeStyle={{
					background: 'darkblue'
				}}
			>
				Login
			</NavLink>
			<NavLink
				to="/signup"
				exact
				style={linkStyles}
				activeStyle={{
					background: 'darkblue'
				}}
			>
				Signup
			</NavLink>

			<NavLink
				to="/about"
				exact
				style={linkStyles}
				activeStyle={{
					background: 'darkblue'
				}}
			>
				About
			</NavLink>
			<header>
				<button onClick={logOut}>Logout</button>
			</header>
		</div>
	);
}

export default NavBar;
