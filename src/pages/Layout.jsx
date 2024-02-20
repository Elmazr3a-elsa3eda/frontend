import { Route, Routes } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import sound from "../../public/sound.mp3";
import AuthContext from "../context/userContext";
import Header from "../components/Header";
import Bubbles from "../components/Bubbles";
import SideNav from "../components/SideNav";
import Home from "./Home";
import Settings from "./Settings";
import Footer from "../components/Footer";
import FarmDetails from "./FarmDetails";
import Charts from "./Charts";
import { QueryClient, QueryClientProvider } from "react-query";
import Crops from "./Crops";
import FarmCreation from "./FarmCreation";
import CropsDetails from "./CropsDetails";
const queryClient = new QueryClient();
function Layout() {
	const { token } = useContext(AuthContext);
	const audioRef = useRef();
	const btn = useRef();

	const playAudio = () => {
		audioRef.current
			.play()
			.then(() => {
				// Handle successful playback (optional)
			})
			.catch((error) => {
				// Handle potential errors (optional)
			});
	};

	useEffect(() => {
		playAudio(); // Automatically play audio when component mounts
	}, []);
	return (
		<div className="w-screen min-h-screen bg-black overflow-x-hidden  relative">
			<div>
				{/* <button ref={btn} onClick={playAudio}>Play Audio</button> */}
				<audio ref={audioRef}>
					<source id="audio" src={sound} type="audio/mp3" />
				</audio>
			</div>
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
							<Route path="/crops/:id" element={<CropsDetails />} />
							<Route path="/notifications" element={<Charts />} />
							<Route path="/createfarm" element={<FarmCreation />} />
						</Routes>
					</QueryClientProvider>
				</div>
			</div>

			<Bubbles />
			<Footer />
		</div>
	);
}

export default Layout;
