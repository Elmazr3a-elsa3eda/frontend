import React, { useEffect, useState } from "react";
import farmApi from "../api/farmApi";
import Loading from "../components/Loading";
import AddWorker from "../components/AddWorker";
import { MdDeleteForever } from "react-icons/md";
import { useQuery } from "react-query";

function FarmDetails() {
	const [IsLoading, setIsLoading] = useState(false);
	const [farmData, setFarmData] = useState({});
	const [WorkersModal, setWorkersModal] = useState(false);

	const farmId = window.location.pathname.split("/")[1];

	const {data, isLoading, isError, error} = useQuery(["data", window.location], async () => {
		const res = await farmApi.getFarmById(farmId);
		// setFarmData(res.data);
		return res.data;
	})
  
  const removeWorker_ = (farmID ,workerID) => {
    console.log("🚀 ~ FarmDetails ~ farmID ,workerID:", farmID ,workerID)
    farmApi.removeWorker(farmID ,workerID)
    .then(res => {
      console.log(res)
      // getFarm(farmId)
    })
    .catch(err => console.log(err))
  }

	if (isLoading) return <Loading />;
	if (isError) return <div>Error loading data: {error.message}</div>;

	return (
		<>
			<div className="text-white flex flex-col justify-center items-center gap-2">
				<p>{data?.name}</p>
				<p>{data?._id}</p>
				<div className="bg-darckblue w-fit p-4 flex flex-col justify-center items-start gap-4">
					<h1 className="text-white">Stakholders</h1>
					<div>
						{data?.stackholders?.map((stakeholder) => (
							<div key={stakeholder._id} className="bg-gray-900 p-2 rounded">
								<p>{stakeholder.username}</p>
								<p>{stakeholder.email}</p>
							</div>
						))}
					</div>
				</div>
				<div className="bg-darkerblue w-fit p-4 flex flex-col justify-center items-start gap-4">
					<h1 className="text-white">workers</h1>
					<div className="flex flex-col justify-center items-start gap-4">
						{data?.workers?.length === 0 ? (
							<button onClick={()=> setWorkersModal(true)} className="bg-green text-darkerblue py-1 px-2 rounded">
								Add Workers
							</button>
						) : (
              <div>
							{data?.workers?.map((worker) => (
								<div key={worker._id} className="bg-gray-900 p-2 rounded">
									<p>username: {worker.username}</p>
									<p>email: {worker.email}</p>
									<p>role: {worker.role}</p>
									<p>role: {worker._id}</p>
                  <button onClick={()=>removeWorker_(farmId ,worker?._id)} className="text-red-500 hover:text-red-300 duration-150"><MdDeleteForever /></button>
								</div>
							))}
              <button onClick={()=> setWorkersModal(true)} className="bg-green text-darkerblue py-1 px-2 rounded">
								Add Workers
							</button>
              </div> 
						)}

					</div>
				</div>
			</div>
          {WorkersModal && <AddWorker farmID={farmId} close={()=> setWorkersModal(false)} />}
		</>
	);
}

export default FarmDetails;
