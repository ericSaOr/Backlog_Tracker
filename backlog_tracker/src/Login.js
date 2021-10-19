function Login() {
	return (
		<form>
			<h1>Login</h1>
			<div>
				<input type="text" name="username" placeholder="Username" />
			</div>
			<div>
				<input type="password" name="password" placeholder="Password" />
			</div>
			<input type="submit" value="Login" />
		</form>
	);
}

export default Login;
