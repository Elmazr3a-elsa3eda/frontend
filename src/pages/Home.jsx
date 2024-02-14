import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/userContext";
import farmApi from "../api/farmApi";
import FarmData from "../components/FarmData";

function Home() {
	const { user } = useContext(AuthContext);
	console.log("🚀 ~ Home ~ user:", user)

	const [finalData, setFinalData] = useState();

	const getFarmData = ()=> {
		farmApi.getFarm(user._id).then(res => {
			console.log(res.data[0])
			setFinalData(res.data[0])
		}).catch(err => {
			console.log(err)
		})
	}

	useEffect(()=>{
		getFarmData()
	},[])


	return (
		<div className="text-white">
			<FarmData finalData={finalData} />
			
			<div>
			manga
			</div>
		
		</div>
	);
}

export default Home;
