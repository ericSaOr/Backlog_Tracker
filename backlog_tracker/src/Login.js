import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';



function Login({setErrors}) {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [user, setUser] = useState(null);
	const [ loginErrors, setLoginErrors ] = useState([]);
	const history = useHistory();


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
					history.push("/");
				} else {
					setErrors(false);
					setUser(json);
					history.push("/gamecontainer")
					
				}
			});
		return 0;
	}

	console.log(user)

	// if ({setUser}===true) return <GameContainer />;

	console.log(username, password)
	return (
        <>
		<h1>Backlog Tracker</h1>
        <h2>Please Log In or Sign up!</h2>
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
