import React, { useState } from 'react'
import { useQuery } from 'react-query'
import farmApi from '../api/farmApi'
import Loading from '../components/Loading';
import { useSnackbar } from '../context/SnackBarContext';
import AddCrops from '../components/AddCrops';
import cropsApi from '../api/cropsApi';
import { FiEdit2 } from "react-icons/fi";
import EditCropModal from '../components/EditCropModal';
import { MdDeleteForever } from 'react-icons/md';

function CropsDetails() {
  const [cropsModal, setCropsModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [cropData, setCropData] = useState(null);
	const { openSnackbar  } = useSnackbar();

  const farmId = window.location.pathname.split("/")[2];
  const {data,isLoading, isError ,error,refetch} = useQuery(['data',farmId], async()=>{
    const res = await farmApi.getFarmCrops(farmId)
    return res.data
  })

  const handleEditClick = (cropData) => () => {
    setCropData(cropData);
    setEditModal(true);
  };

  const deleteCrop_ = (id, farmId) => {
    cropsApi.deletCrop(id, farmId)
    .then(res => {
      console.log(res)
      openSnackbar('Crop Removed');
      refetch()
    })
    .catch(err => console.log(err))
  }


  if(isLoading) return <Loading />
  if (isError) return <div className='flex justify-center items-center w-full h-full bg-black text-green p-8'>Error loading data: {error.message}</div>;
  return (
    <>
      <div className="text-white w-full h-full flex flex-col justify-center items-center gap-4">
        <h1 className='text-3xl font-semibold text-green'>All Crops</h1>
        <div className="bg-darkerblue w-full lg:w-2/4 p-4 flex flex-col justify-center items-center gap-4 rounded-md">
          {data?.map((crop)=> (
            <div key={crop._id} className='bg-gray-900 p-2 rounded w-full capitalize text-xl flex flex-col items-start gap-2'>
              <p>Crop: {crop.name}</p>
              <p>plant date: {crop.plantDate}</p>
              <p>harvest date: {crop.harvestDate}</p>
              <p>planted size: {crop.count} acres</p>
              <div className='flex items-end gap-2'>
                <button
                  onClick={handleEditClick(crop)}
                  className='bg-orange-500 hover:bg-orange-300 duration-150 text-slate-200 text-xl flex items-center gap-2 rounded-md py-1 px-2'
                >
                  Edit <FiEdit2 />
                </button>
                <button
                  onClick={()=> deleteCrop_(crop._id, farmId)}
                  className={`bg-red-500 py-1 px-2 rounded-md text-white hover:bg-red-300 duration-150 text-xl flex items-center gap-2`}>
                  Delete <MdDeleteForever />
                </button>
              </div>
              {editModal && <EditCropModal farmId={farmId} refetch={refetch} close={()=> setEditModal(false)} cropData={cropData} />}
            </div>
          ))}
          <button onClick={()=> setCropsModal(true)} className="bg-green text-darkerblue py-1 px-2 rounded">Add Crop</button>
        </div>
        {cropsModal && <AddCrops farmId={farmId} refetch={refetch} close={()=> setCropsModal(false)} />}
      </div>
    </>
  )
}

export default CropsDetails