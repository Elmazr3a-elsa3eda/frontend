import React, { useEffect, useRef, useState } from 'react'
import cropsApi from '../api/cropsApi';
import { useSnackbar } from '../context/SnackBarContext';

function AddCrops({close,farmId,refetch}) {

  const { openSnackbar  } = useSnackbar();
  const modalRef = useRef(null);

  const [crop,setCrop] = useState({
    name: "",
    count: 0,
    plantDate: "",
    harvestDate: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = name === 'count' ? Number(value) : value;
  
    setCrop({
      ...crop,
      [name]: newValue
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    cropsApi.createCrop({...crop,farmId})
    .then((res) => {
      console.log(res);
      refetch()
      openSnackbar('Crop Added');
      close();
    })
    .catch((err) => {
      console.log(err);
    })
    // console.log(typeof crop.count);
  };

  useEffect(()=>{
    const handleClickOutside = (e)=>{
      if(modalRef.current && !modalRef.current.contains(e.target)){
        close()
      }
    }

    document.addEventListener('mousedown',handleClickOutside)

    return ()=>{
      document.removeEventListener('mousedown',handleClickOutside)
    }
  },[])

  return (
    <div className='modal z-50'>
      <div ref={modalRef} className='p-4 flex flex-col justify-center items-center gap-5 rounded-xl bg-green'>
        <h1 className='text-darkerblue font-bold text-2xl capitalize'>Add Crop</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 w-full'>
          <input type="text" name="name" value={crop.name} onChange={handleChange} className='w-full p-2 rounded-md bg-black text-slate-300 focus:outline-none'  placeholder='Crop name' />
          <input type="date" name="plantDate" value={crop.plantDate} onChange={handleChange} placeholder='plant date' className='w-full p-2 rounded-md bg-black text-slate-300 focus:outline-none'/>
          <input type="date" name="harvestDate" value={crop.harvestDate} onChange={handleChange} placeholder='harvest date' className='w-full p-2 rounded-md bg-black text-slate-300 focus:outline-none' />
          <input type="number" name="count" value={crop.count} onChange={handleChange} placeholder='number of acers' className='w-full p-2 rounded-md bg-black text-slate-300 focus:outline-none' />
          <button className='bg-darckblue text-white p-2 rounded w-full' type='submit'>Add Crop</button>
        </form>
        <button onClick={close} className='bg-red-500 text-white p-2 rounded w-full'>Close</button>
      </div>
    </div>
  )
}

export default AddCrops