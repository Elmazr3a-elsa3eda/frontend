import React,{useContext} from "react";
import { FaRegBell } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { GiCorn } from "react-icons/gi";
import { BsGear } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineInsertChart } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import axios from "axios";
import AuthContext from "../context/userContext";
function SideNav() {

	const {token,setToken} = useContext(AuthContext)

	const handleLogout = () => {
		setToken(null);
		localStorage.removeItem('token');
		delete axios.defaults.headers.common['Authorization'];
	};
	return (
		<>
			<div className="w-full max-w-[133px] h-full min-h-[500px] max-h-[782px] pt-10 pb-5 flex flex-col justify-center items-center bg-darkerblue/70 z-20 rounded-[20px] relative">
				<div className="w-full flex flex-col justify-center items-center gap-8 border-b pb-8">
					<NavLink
						to={"/"}
						className="
							rounded-xl p-1.5 md:p-3 text-base md:text-2xl
							font-semibold text-white hover:bg-gray-400
							hover:text-black duration-300 text-center
						"
					>
						<GrHomeRounded />
					</NavLink>
					<NavLink
						to={"/charts"}
						className="
							rounded-xl p-1.5 md:p-3 text-base md:text-2xl 
							font-semibold text-white hover:bg-gray-400
							hover:text-black duration-300 text-center
						"
					>
						<MdOutlineInsertChart />
					</NavLink>
					<NavLink
						to={"/crops"}
						className="
							rounded-xl p-1.5 md:p-3 text-base md:text-2xl
							font-semibold text-white hover:bg-gray-400
							hover:text-black duration-300 text-center
						"
					>
						<GiCorn />
					</NavLink>
					<NavLink
						to={"/notifications"}
						className="
							rounded-xl p-1.5 md:p-3 text-base md:text-2xl
							font-semibold text-white hover:bg-gray-400
							hover:text-black duration-300 text-center
						"
					>
						<FaRegBell className="text-xl text-white font-semibold"/>
					</NavLink>
					{/* <NavLink
						to={"/wallet"}
						className="
							rounded-xl p-1.5 md:p-3 text-base md:text-2xl
							font-semibold text-white hover:bg-gray-400
							hover:text-black duration-300 text-center
						"
					>
						<LuWallet />
					</NavLink> */}
				</div>

				<div className="w-full flex flex-1 flex-col justify-end items-center gap-2">
					<NavLink
						to={"/settings"}
						className="
							rounded-xl p-1.5 md:p-3 text-base md:text-2xl
							font-semibold text-white hover:bg-gray-400
							hover:text-black duration-300 text-center
						"
					>
						<BsGear />
					</NavLink>
					<button
						onClick={handleLogout}
						className="
							rounded-xl p-1.5 md:p-3 text-base md:text-2xl
							font-semibold text-white hover:bg-gray-400
							hover:text-black duration-300 text-center
						"
					>
						<CiLogout />
					</button>
				</div>
			</div>
		</>
	);
}

export default SideNav;