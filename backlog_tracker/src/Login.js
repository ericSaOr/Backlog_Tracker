import React, { useState } from 'react';

function Login({setErrors, setUser}) {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loginErrors, setLoginErrors ] = useState([]);
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
				console.log('hi!');
				if (json.error) {
					setLoginErrors(json.error);
				} else {
					setErrors(false);
				}
			});
		return 0;
	}
	return (
        <>
        <h1>Please Log In!</h1>
		<form onSubmit = {handleSignIn}>
            <label>
                Username
                <input type = "text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </label>
			<label>
                Password
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <input type="submit" value='Login!'/>
			</form>
            {/* {loginErrors?loginErrors.map(e =><div>{e}</div>):null} */}
        </>
	);
}

export default Login;
