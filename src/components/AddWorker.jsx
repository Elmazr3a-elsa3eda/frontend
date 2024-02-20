import { useEffect, useState } from 'react'
import farmApi from '../api/farmApi'
import { useSnackbar } from '../context/SnackBarContext';


function AddWorker({close,farmID,refetch}) {
  const [workerID, setWorkerID] = useState('')
  const { openSnackbar  } = useSnackbar();

  const addWorker = (farmID ,workerID) => {

    farmApi.addWorker(farmID ,workerID)
    .then(res => {
      openSnackbar('Worker Added');
      refetch()
      close()
    })
    .catch(err => console.log(err))
    console.log(workerID);
    setWorkerID('')
  }

  return (
    <div className='p-4 rounded modal z-50'>
      <div className='flex flex-col justify-center items-center gap-5 bg-green'>
        <h1 className='text-darkerblue font-bold text-2xl capitalize'>Add Worker By his ID</h1>
        <input type="text" className='text-black' value={workerID} onChange={(e)=> setWorkerID(e.target.value)} placeholder='Worker ID' />
        <button onClick={()=>addWorker(farmID,workerID)} className='bg-darkerblue text-white p-2 rounded'>Add Worker</button>
        <button onClick={close} className='bg-red-500 text-white p-2 rounded'>Close</button>
      </div>
    </div>
  )
}

export default AddWorker