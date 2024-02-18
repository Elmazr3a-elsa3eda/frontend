import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/userContext';
import { GiBarn } from "react-icons/gi";
import { IoMdResize } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";

function FarmerData({data}) {
  const { user } = useContext(AuthContext);


  
  return (
  <>
    {data?.map((farm)=> (
      <Link to={`/${farm?._id}`} className="w-full rounded-lg py-4 bg-gray-200/65 flex flex-col justify-start items-center gap-2 hover:scale-[101%] duration-150" key={farm._id}>
        <p className='w-fit flex items-end gap-2 text-xl'><GiBarn className='text-red-700 text-3xl' />Farm: {farm.name}</p>
        <p className='w-fit flex items-end gap-2 text-xl'><IoMdResize className='text-black text-3xl' />Size: {farm.size} acre</p>
        <p className='w-fit flex items-end gap-2 text-xl'><MdAccessTime className='text-blue-500 text-3xl' />Planted: {farm.planted_percentage}%</p>
        <p className='w-fit flex items-end gap-2 text-xl'><IoMdDoneAll className='text-green text-3xl' />Harvested: {farm.harvest_percentage}%</p>
        <p className={`w-fit flex items-end gap-2 text-xl ${user?.role === 'farmer'? "hidden" : ''}`}><GrUserWorker className='text-orange-500 text-3xl' />workers No. {farm.workers.length}</p>
      </Link>
    ))}
  </>
  )
}

export default FarmerData