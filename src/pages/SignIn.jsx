import loginApi from "../api/loginApi";
import AuthContext from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
function SignIn() {
	const [loading, setLoading] = useState(false);
	const { token, setToken, setUser } = useContext(AuthContext);
	const [data, setData] = useState({ username: "", password: "" });
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleLogin = (token, user) => {
		setToken(token);
		localStorage.setItem("token", token);
		localStorage.setItem("user", JSON.stringify(user));
		navigate("/");
	};

	useEffect(() => {
		const tokenFromStorage = localStorage.getItem("token");
		const userFronStorage = localStorage.getItem("user");
		if (tokenFromStorage) {
			setToken(tokenFromStorage);
			axios.defaults.headers.common[
				"Authorization"
			] = `Bearer ${tokenFromStorage}`;
			setUser(JSON.parse(userFronStorage));
			navigate("/");
		}
	}, []);

	const handleSignIn = (data) => {
		loginApi
			.login(data)
			.then((res) => {
				setToken(res.data.token);
				setUser(res.data.user);
				handleLogin(res.data.token, res.data.user);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
				setError(err.response.data);
			});
	};

	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		handleSignIn(data);
	};

	return (
		<div className="mx-auto max-w-screen h-screen px-4 py-44 sm:px-6 lg:px-8 bg-black ">
			<div className="mx-auto max-w-lg bg-darkerblue rounded-2xl py-10  shadow-xl shadow-green">
				<h1 className="text-center text-2xl font-bold text-green sm:text-3xl">
        Sign in to your account
				</h1>


				<form
					onSubmit={handleSubmit}
					className="mb-0 mt-6 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8"
				>


					<div>
						<label htmlFor="username" className="sr-only">
							username
						</label>

						<div className="relative">
							<input
								value={data.username}
								onChange={(e) => setData({ ...data, username: e.target.value })}
								type="text"
								className="w-full rounded-lg text-slate-300 bg-darckblue p-4 pe-12 text-sm shadow-sm focus:outline-none"
								placeholder="Enter username"
							/>
						</div>
					</div>

					<div>
						<label htmlFor="password" className="sr-only">
							Password
						</label>

						<div className="relative">
							<input
								value={data.password}
								onChange={(e) => setData({ ...data, password: e.target.value })}
								type="password"
								className="w-full rounded-lg text-slate-300 bg-darckblue focus:outline-none p-4 pe-12 text-sm shadow-sm"
								placeholder="Enter password"
							/>
						</div>
					</div>

					<button
						type="submit"
						className="block w-full rounded-lg bg-darckblue px-5 py-3 text-sm font-medium text-white"
					>
						Sign in
					</button>
					{error && (
						<p className="text-red-500 text-lg font-protest p-2 rounded-md border border-red-500 text-center mx-auto w-full">
							{error}
						</p>
					)}
					{loading && <Loading />}
					<p className="text-center text-sm text-gray-500 flex gap-2 justify-center items-center">
						No account?
						<Link to="/signup" className="underline text-green">
							Sign up
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default SignIn;
