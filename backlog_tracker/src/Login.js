import React from 'react'




function Login({handleSignIn, username, setUsername, password, setPassword}) {

	
	
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
