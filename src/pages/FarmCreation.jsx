import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/userContext";
import farmApi from "../api/farmApi";
import axios from "axios";
import { useNavigate } from "react-router";

function FarmCreation() {
	const { user } = useContext(AuthContext);
	if (user.role !== "stakeholder") return <div>you are not a stakeholder</div>;
	const navigate = useNavigate()

	const [formData, setFormData] = useState({
		name: '',
		size: '',
		planted_percentage: '',
		harvest_percentage: '',
		workers: [],
		userId: user._id,
		location: {
			latitude: '',
			longitude: '',
		},
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		let newValue = value;
	
		if (name.includes(".")) {
			const [parentName, childName] = name.split(".");
			setFormData(prevState => ({
				...prevState,
				[parentName]: {
					...prevState[parentName],
					[childName]: newValue,
				},
			}));
		} else {
			if (name === "workers") {
				newValue = value.split(" ");
			}
			setFormData(prevState => ({
				...prevState,
				[name]: newValue,
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		farmApi
			.createFarm(formData)
			.then((res) => {
				console.log(res);
				navigate("/");
			})
			.catch((err) => console.log(err));
		console.log(formData)
	};

  const text = "asjkdhkasd kajshdjkasdh"

  // console.log(text.split(" "))
	return (
		<div className="flex justify-center items-start">
		<div className="w-screen lg:w-2/4 bg-green">
			<form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 px-4 py-4">
				<label className="flex flex-col">
					Farm Name:
					<input
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Farm Name"
            className="p-2 rounded-md bg-black text-slate-300 focus:outline-none"
					/>
				</label>
				<label className="flex flex-col">
					Farm Size:
					<input
						type="number"
						name="size"
						value={formData.size}
						onChange={handleChange}
						placeholder="Farm Size"
            className="p-2 rounded-md bg-black text-slate-300 focus:outline-none"
					/>
				</label>
				<label className="flex flex-col">
					Planted Percentage:
					<input
						type="number"
						name="planted_percentage"
						value={formData.planted_percentage}
						onChange={handleChange}
						placeholder="Planted Percentage"
            className="p-2 rounded-md bg-black text-slate-300 focus:outline-none"
					/>
				</label>
				<label className="flex flex-col">
					Harvest Percentage:
					<input
						type="number"
						name="harvest_percentage"
						value={formData.harvest_percentage}
						onChange={handleChange}
						placeholder="Harvest Percentage"
            className="p-2 rounded-md bg-black text-slate-300 focus:outline-none"
					/>
				</label>
				<label className="flex flex-col gap-5">
					Location:
					<input
						type="number"
						name="location.latitude"
						value={formData.location.latitude}
						onChange={handleChange}
						placeholder="Latitude"
						className="p-2 rounded-md bg-black text-slate-300 focus:outline-none"
					/>
					<input
						type="number"
						name="location.longitude"
						value={formData.location.longitude}
						onChange={handleChange}
						placeholder="Longitude"
						className="p-2 rounded-md bg-black text-slate-300 focus:outline-none"
					/>
				</label>
				<label className="flex flex-col">
					Workers:
          <input
            name="workers"
            value={formData.workers.join(' ')}
            onChange={handleChange}
            placeholder="Workers ID"
            className="p-2 rounded-md bg-black text-slate-300 focus:outline-none"
          />
				</label>
				<button type="submit" className="px-2 py-1 w-2/4 bg-black text-white text-lg rounded-md self-center">Create Farm</button>
			</form>
		</div>
		</div>
	);
}

export default FarmCreation;
