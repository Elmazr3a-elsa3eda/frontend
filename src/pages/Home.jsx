import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/userContext";
import farmApi from "../api/farmApi";
import FarmerData from "../components/FarmerData";

function Home() {
	const { user } = useContext(AuthContext);

	const [finalData, setFinalData] = useState();

	const getFarmData = ()=> {
		farmApi.getFarm(user._id).then(res => {
			setFinalData(res.data[0])
		}).catch(err => {
			console.log(err)
		})
	}

	// useEffect(()=>{
	// 	getFarmData()
	// },[])


	return (
<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
		<FarmerData />
</div>
	);
}

export default Home;
