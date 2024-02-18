import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/userContext";
import FarmerData from "../components/FarmerData";
import farmApi from "../api/farmApi";
import FarmCreation from "../components/FarmCreation";
import Loading from "../components/Loading";
import { useQuery } from "react-query";

function Home() {
	const { user } = useContext(AuthContext);
	const [IsLoading, setIsLoading] = useState(false);
	const [finalData, setFinalData] = useState();
	const [userFarms, setUserFarms] = useState([]);

	const { data, isLoading, isError, error } = useQuery(["data", window.location], async () => {
		const res = await farmApi.getFarmByUser(user._id);
		setUserFarms(res.data);
		return res.data;
	});

	if (isLoading) return <Loading />;
	if (isError) return <div>Error loading data: {error.message}</div>;

	return (
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
			{
				data?.length > 0 ? 
				<FarmerData data={data} />
				:
				<FarmCreation />
			}
		</div>
	);
}

export default Home;
