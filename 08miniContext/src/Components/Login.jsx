import react, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
const Login = () => {
	const { user, setUser } = useContext(UserContext);
	const [Username, SetUsername] = useState("");
	const [password, SetPassword] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		setUser(Username);
	};

	return (
		<>
			<div className="border p-4 w-1/4 mx-auto my-5">
				<h1 className="text-xl font-bold text-center">Login</h1>
				<form onSubmit={handleSubmit}>
					<input
						className="border p-1 m-1 w-full"
						type="text"
						placeholder="Username"
						onChange={(e) =>
							SetUsername(e.target.value)
						}
						value={Username}
					/>
					<input
						className="border p-1 m-1 w-full"
						type="password"
						placeholder="Password"
						onChange={(e) =>
							SetPassword(e.target.value)
						}
						value={password}
					/>
					<button
						className="border rounded-2xl p-1 m-1 w-full bg-blue-500 text-white"
						type="submit">
						Login
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
