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
import FarmDetails from "./FarmDetails";
import Charts from "./Charts";
function Layout() {
  const { token } = useContext(AuthContext);

	return (
		<div className="w-screen min-h-screen bg-black overflow-x-hidden  relative">
			<Header />

			<div className="w-full min-h-screen py-4 px-2 flex flex-row justify-between items-start gap-5">
				<div className="md:w-2/12 lg:w-1/12 h-full md:block hidden">
					<SideNav />
				</div>

				<div className="w-full md:w-10/12 lg:w-11/12 h-full z-10">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/:farmName" element={<FarmDetails />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/charts" element={<Charts />} />
						<Route path="/crops" element={<Charts />} />
						<Route path="/notifications" element={<Charts />} />
					</Routes>
				</div>
			</div>

			<Bubbles />
			<Footer />
		</div>
	) 
}

export default Layout;
