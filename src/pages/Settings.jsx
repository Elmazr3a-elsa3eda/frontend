import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import farmApi from "../api/farmApi";
import AuthContext from "../context/userContext";
import Loading from "../components/Loading";

function Settings() {
	const { user } = useContext(AuthContext);
	const [farms, setFarms] = useState([]);
	const { data, isLoading, isError, error } = useQuery(["data", window.location], async () => {
		const res = await farmApi.getFarmByUser(user._id);
    return res.data;
	});
	if (isLoading) return <Loading />;
	if (isError) return <div>Error loading data: {error.message}</div>;


	return (
		<div>
			<h1>Settings</h1>
			{data?.map((farm) => (
				<div key={farm._id}>
					<h2>{farm.name}</h2>
					<p>Size: {farm.size}</p>
					<p>Planted Percentage: {farm.planted_percentage}</p>
					<p>Harvest Percentage: {farm.harvest_percentage}</p>
					<h3>Workers:</h3>
					{farm.workers.map((worker) => (
						<p key={worker._id}>
							{worker.username} ({worker.role})
						</p>
					))}
				</div>
			))}
		</div>
	);
}

export default Settings;
