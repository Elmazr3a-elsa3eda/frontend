import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/userContext";
import FarmerData from "../components/FarmerData";
import farmApi from "../api/farmApi";
import Loading from "../components/Loading";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function Home() {
	const { user } = useContext(AuthContext);
	const [IsLoading, setIsLoading] = useState(false);
	const [finalData, setFinalData] = useState();
	const [userFarms, setUserFarms] = useState([]);

	const navigate = useNavigate();

	const { data, isLoading, isError, error } = useQuery(["data", window.location], async () => {
		const res = await farmApi.getFarmByUser(user._id);
		setUserFarms(res.data);
		return res.data;
	});

	if (isLoading) return <Loading />;
	if (isError) return <div>Error loading data: {error.message}</div>;

	return (
		<div className={`grid grid-cols-1 gap-4 justify-items-center align-items-center ${user?.role != 'stakeholder' || data?.length > 0 ? 'lg:grid-cols-4 lg:gap-8' : ''}`}>
			{
				(data?.length > 0 || user?.role == "farmer" || user?.role == "engineer") ? 
				<FarmerData data={data} />
				:
				navigate('/createfarm')
			}
			{
				user?.role == "stakeholder" && (
				<Link to={`/createfarm`} className="w-full rounded-lg py-4 bg-gray-200/65 flex flex-col justify-center items-center gap-2 hover:scale-[101%] duration-150">
					<div className="flex flex-col justify-center items-center gap-4">
					<FaPlus className='text-black text-9xl' />
					<p className='text-3xl'>Create Farm</p>
					</div>
				</Link>
				)
			}
		</div>
	);
}

export default Home;
