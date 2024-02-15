import {Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../context/userContext";
import Header from "../components/Header";
import Bubbles from "../components/Bubbles";
import SideNav from "../components/SideNav";
import Home from "./Home";
import Settings from "./Settings";
import Footer from "../components/Footer";
import axios from "axios";
function Layout() {
  const { token } = useContext(AuthContext);
	const apiKey = import.meta.env.VITE_WEATHER_API_KEY
	const apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?'
	const lat = 24.128342
	const lon = 32.899569

	useEffect(()=>{
		axios.get(`${apiUrl}lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`)
		.then(res => {
			console.log(res.data)
		})
		.catch(err => {
			console.log(err)
		})
	},[])


	return (
		<div className="w-screen min-h-screen bg-black overflow-x-hidden z-30 relative">
			<Header />

			<div className="w-full min-h-screen py-4 px-2 flex flex-row justify-center items-start">
				<div className="w-1/12 h-full md:block hidden">
					<SideNav />
				</div>

				<div className="w-full md:w-11/12 h-full z-10">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="settings" element={<Settings />} />
					</Routes>
				</div>
			</div>

			<Bubbles />
			<Footer />
		</div>
	) 
}

export default Layout;
