import React, { useState } from 'react'
import cropsApi from '../api/cropsApi';
import { useSnackbar } from '../context/SnackBarContext';

function AddCrops({close,farmId,refetch}) {

  const { openSnackbar  } = useSnackbar();

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

  return (
    <div className='rounded modal z-50'>
      <div className='p-4 flex flex-col justify-center items-center gap-5 bg-green'>
        <h1 className='text-darkerblue font-bold text-2xl capitalize'>Add Worker By his ID</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4'>
          <input type="text" name="name" value={crop.name} onChange={handleChange} className='text-black'  placeholder='Crop name' />
          <input type="date" name="plantDate" value={crop.plantDate} onChange={handleChange} placeholder='plant date'  />
          <input type="date" name="harvestDate" value={crop.harvestDate} onChange={handleChange} placeholder='harvest date' />
          <input type="number" name="count" value={crop.count} onChange={handleChange} placeholder='number of acers' />
          <button className='bg-darkerblue text-white p-2 rounded' type='submit'>Add Crop</button>
        </form>
        <button onClick={close} className='bg-red-500 text-white p-2 rounded'>Close</button>
      </div>
    </div>
  )
}

export default AddCrops