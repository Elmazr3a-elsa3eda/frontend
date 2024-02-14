import { Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/userContext";
import Header from "../components/Header";
import Bubbles from "../components/Bubbles";
import SideNav from "../components/SideNav";
function Layout() {
  const { token } = useContext(AuthContext);


	return (
		<div className="w-screen min-h-screen bg-black overflow-x-hidden z-30 relative">
			<Header />

			<div className="w-full h-full py-4 px-2 md:px-7 flex flex-row justify-center items-start gap-6">
				<div className="w-1/12 h-full md:block hidden">
					<SideNav />
				</div>

				<div className="w-full md:w-11/12 h-full z-30">
					<Outlet />
				</div>
			</div>

			<Bubbles />
		</div>
	) 
}

export default Layout;
