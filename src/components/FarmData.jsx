import React from 'react'

function FarmData({finalData}) {
  return (
    <div>
    <p>
      farmID: {finalData?._id}
    </p>
    <p>
      farmName: {finalData?.name}
    </p>
    <p>
      farm size: {finalData?.size} acres
    </p>
    <p>
      planted percentage: {finalData?.planted_percentage}%
    </p>
    <p>
      harvested percentage: {finalData?.harvest_percentage}%
    </p>
    <div className="bg-green text-black w-fit p-2 rounded my-2">
      <h1 className="text-black font-bold text-3xl">crops</h1>
      {finalData?.crops?.map((crop) => (
        <div key={crop._id}  className="bg-darkerblue text-white w-fit p-2 rounded my-2">
          <p>crop name: {crop.Crop_Type}</p>
          <p>crop harvest date: {crop.Crop_HarvestDate}</p>
          <p>crop plant date: {crop.Crop_PlantDate}</p>
        </div>
      ))}
    </div>
    <div className="bg-green text-black w-fit p-2 rounded my-2">
    <h1 className="text-black font-bold text-3xl">equipments</h1>
    {
      finalData?.equipments?.map((eq)=>(
        <div key={eq._id} className="bg-indigo-500 w-fit p-2 rounded my-2">
          <p>equipment count: {eq.count}</p>
          <p>equipment name: {eq.name}</p>
        </div>
      ))
    }
    </div>
    <div className="bg-green text-black w-fit p-2 rounded my-2">
      <h1 className="text-black font-bold text-3xl">fertilizers</h1>
    {
      finalData?.fertilizers?.map((fer)=>(
        <div key={fer._id} className="bg-blue-400 w-fit p-2 rounded my-2">
          <p>fertilizer count: {fer.count}</p>
          <p>fertilizers name: {fer.name}</p>
        </div>
      ))
    }
    </div>
    
    <div className="bg-red-500 text-black w-fit p-2 rounded my-2">
      <h1 className="text-black font-bold text-3xl">Workers</h1>
    {
      finalData?.workers?.map((worker)=>(
        <div key={worker._id} className="bg-green w-fit p-2 rounded my-2">
          <p>name: {worker.username}</p>
          <p>role {worker.role}</p>
          <p>email {worker.email}</p>
        </div>
      ))
    }
    </div>
  </div>
  )
}

export default FarmData