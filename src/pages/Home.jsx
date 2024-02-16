import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/userContext";
import FarmerData from "../components/FarmerData";
import farmApi from "../api/farmApi";
import FarmCreation from "../components/FarmCreation";
import Loading from "../components/Loading";

function Home() {
	const { user } = useContext(AuthContext);
	const [IsLoading, setIsLoading] = useState(false);
	const [finalData, setFinalData] = useState();
	const [userFarms, setUserFarms] = useState(0);

	const getFarmData = () => {
		farmApi
			.getFarmByUser(user._id)
			.then((res) => {
				if (res.data.length == 0) {
					console.log("🚀 ~ .then ~ res.data:", res.data)

					console.log("No farm found");
				} else {
					setUserFarms(res.data);
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(()=>{
    setTimeout(()=>{
			// if(userFarms !== 0){
      setIsLoading(true);
			// }
    },1000)
  },[userFarms])

	useEffect(() => {
		if (user.role !== "stakeholder") return;
		console.log(user._id);
		getFarmData();
	}, []);

	return (
		!IsLoading ?
			<Loading />
		:
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
			{
				userFarms === 0 ?
				(<>
					<FarmCreation />
				</>)
				: 
				<>
					<FarmerData data={userFarms} />
				</>
			}
		</div>
	);
}

export default Home;
