import React, { useContext, useEffect, useState } from "react";
import farmApi from "../api/farmApi";
import Loading from "../components/Loading";
import AddWorker from "../components/AddWorker";
import { MdDeleteForever } from "react-icons/md";
import { useQuery } from "react-query";
import AddCrops from "../components/AddCrops";
import { useSnackbar } from '../context/SnackBarContext';
import AuthContext from "../context/userContext";

function FarmDetails() {
	const {user} = useContext(AuthContext)
	const [IsLoading, setIsLoading] = useState(false);
	const [farmData, setFarmData] = useState({});
	const [WorkersModal, setWorkersModal] = useState(false);
	const [cropsModal, setCropsModal] = useState(false);
	const { openSnackbar  } = useSnackbar();

	const farmId = window.location.pathname.split("/")[1];

	const {data, isLoading, isError, error,refetch} = useQuery(["data", window.location], async () => {
		const res = await farmApi.getFarmById(farmId);
		return res.data;
	})
  
  const removeWorker_ = (farmID ,workerID) => {
    console.log("🚀 ~ FarmDetails ~ farmID ,workerID:", farmID ,workerID)
    farmApi.removeWorker(farmID ,workerID)
    .then(res => {
      console.log(res)
			openSnackbar('Worker Removed');
      refetch()
    })
    .catch(err => console.log(err))
  }

	if (isLoading) return <Loading />;
	if (isError) return <div>Error loading data: {error.message}</div>;

	return (
		<>
			<div className="text-white w-full h-full flex flex-col justify-center items-center gap-4">
				 <p className="text-3xl font-semibold text-green">{data?.name}</p>
				<p>{data?._id}</p>
				<div className="bg-darckblue w-full lg:w-2/4 p-4 flex flex-col justify-center items-center gap-4 rounded-md">
					<h1 className="text-white font-semibold text-xl">Stakholders</h1>
					<div className="flex flex-col justify-center items-center gap-2 w-full">
						{data?.stackholders?.map((stakeholder) => (
							<div key={stakeholder._id} className="bg-gray-900 p-4 rounded w-full">
								<p>{stakeholder.username}</p>
							</div>
						))}
					</div>
				</div>
				<div className="bg-darkerblue w-full lg:w-2/4 p-4 flex flex-col justify-center items-center gap-4 rounded-md">
					<h1 className="text-white font-semibold text-xl">workers</h1>
					<div className="flex flex-col justify-center items-center gap-4 w-full">
						{data?.workers?.length === 0 ? (
							<button onClick={()=> setWorkersModal(true)} className={`bg-green text-darkerblue py-1 px-2 rounded ${user.role != 'stakeholder' ? 'hidden': ''}`}>
								Add Workers
							</button>
						) : (
              <div className="flex flex-col justify-center items-center gap-3 w-full">
							{data?.workers?.map((worker) => (
								<div key={worker._id} className="bg-gray-900 p-2 rounded w-full">
									<p>username: {worker.username}</p>
									<p>email: {worker.email}</p>
									<p>role: {worker.role}</p>
                  <button onClick={()=>removeWorker_(farmId ,worker?._id)} className={`text-red-500 hover:text-red-300 duration-150 ${user.role != 'stakeholder' ? 'hidden': ''}`}><MdDeleteForever /></button>
								</div>
							))}
              <button onClick={()=> setWorkersModal(true)} className={`bg-green text-darkerblue py-1 px-2 rounded ${user.role != 'stakeholder' ? 'hidden': ''}`}>
								Add Workers
							</button>
              </div> 
						)}

					</div>
				</div>
				<div className="bg-darkerblue w-full lg:w-2/4 p-4 flex flex-col justify-center items-center gap-4 rounded-md">
					<p className="text-white font-semibold text-xl">Crops</p>
				<div className="flex flex-col justify-center items-center gap-3 w-full">
							{data?.crops?.map((crop) => (
								<div key={crop._id} className="bg-gray-900 p-2 rounded w-full">
									<p>name: {crop.name}</p>
									<p>size: {crop.count} acres</p>
									<p>plant date: {crop.plantDate}</p>
									<p>Harvest date: {crop.harvestDate}</p>
								</div>
							))}
              </div>
					<button onClick={()=> setCropsModal(true)} className="bg-green text-darkerblue py-1 px-2 rounded">Add Crop</button>
				</div>
			</div>
          {WorkersModal && <AddWorker farmID={farmId} refetch={refetch} close={()=> setWorkersModal(false)} />}
          {cropsModal && <AddCrops farmId={farmId} refetch={refetch} close={()=> setCropsModal(false)} />}
		</>
	);
}

export default FarmDetails;
