import React, { useState } from 'react';

function Signup() {
	const [ createUsername, setcreateUsername ] = useState('');
	const [ createPassword, setcreatePassword ] = useState('');
	const [ userCreateErrors, setUserCreateErrors ] = useState({});
	const [ message, setMessage ] = useState('');
	function handleUserCreate(e) {
		e.preventDefault();
		console.log('User Created!');
		const user = {
			user_name: createUsername,
			password: createPassword
		};
		fetch('/create', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.error) {
					setUserCreateErrors(json.error);
				} else {
					setMessage('Profile Created! Please Sign in!');
				}
			});
	}
	return (
		<form onSubmit={handleUserCreate}>
			<label>
				Username
				<input type="text" value={createUsername} onChange={(e) => setcreateUsername(e.target.value)} />
			</label>
			<label>
				Password
				<input type="password" value={createPassword} onChange={(e) => setcreatePassword(e.target.value)} />
			</label>
			<input type="submit" value="Create User" />
		</form>
	);
}

export default Signup;
