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
import { QueryClient, QueryClientProvider } from 'react-query'
import Crops from "./Crops";
import FarmCreation from "./FarmCreation";
const queryClient = new QueryClient();
function Layout() {
  const { token } = useContext(AuthContext);
<QueryClientProvider client={queryClient}>
</QueryClientProvider>
	return (
		<div className="w-screen min-h-screen bg-black overflow-x-hidden  relative">
			<Header />

			<div className="w-full min-h-screen py-4 px-1 md:pr-2 flex flex-row justify-start items-start gap-2">
				<div className="md:w-fit lg:w-fit h-full md:block hidden">
					<SideNav />
				</div>

				<div className="w-full md:w-full lg:w-full h-full z-10">
					<QueryClientProvider client={queryClient}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/:farmId" element={<FarmDetails />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="/charts" element={<Charts />} />
							<Route path="/crops" element={<Crops />} />
							<Route path="/notifications" element={<Charts />} />
							<Route path="/createfarm" element={<FarmCreation />} />
						</Routes>
					</QueryClientProvider>
				</div>
			</div>

			<Bubbles />
			<Footer />
		</div>
	) 
}

export default Layout;
