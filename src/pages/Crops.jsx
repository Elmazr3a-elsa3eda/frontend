import React, { useContext, useState } from 'react'
import AuthContext from '../context/userContext';
import { useNavigate } from 'react-router';
import { useQuery } from 'react-query';
import farmApi from '../api/farmApi';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import CropsLink from '../components/CropsLink';

function Crops() {
  const { user } = useContext(AuthContext);
	const [userFarms, setUserFarms] = useState([]);

	const navigate = useNavigate();

	const { data, isLoading, isError, error } = useQuery(["data", window.location], async () => {
		const res = await farmApi.getFarmByUser(user._id);
		setUserFarms(res.data);
		return res.data;
	});

	if (isLoading) return <Loading />;
	if (isError) return <div>Error loading data: {error.message}</div>;
  
  return (
    <div className={`grid grid-cols-1 gap-4 justify-items-center align-items-center ${user?.role != 'stakeholder' || data?.length > 0 ? 'lg:grid-cols-4 lg:gap-8' : ''}`}>
			{
				(data?.length > 0 || user?.role == "farmer" || user?.role == "engineer") ? 
				<CropsLink data={data} />
				:
				navigate('/createfarm')
			}
		</div>
  )
}

export default Crops