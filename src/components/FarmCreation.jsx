import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/userContext";
import farmApi from "../api/farmApi";
import axios from "axios";

function FarmCreation() {
  const { user } = useContext(AuthContext);
  if (user.role !== "stakeholder") return <div>you are not a stakeholder</div>;
  
  const [formData, setFormData] = useState({
    name: "",
    size: 0,
    planted_percentage: 0,
    harvest_percentage: 0,
    crops: [],
    workers: [],
    equipments: [],
    fertilizers: [],
    medicines: [],
    userId: user._id,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
  
    if (name === 'crops') {
      newValue = value.split(' ');
    }
  
    setFormData({
      ...formData,
      [name]: [newValue]
    });
  };

  useEffect(()=>{
    
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    farmApi.createFarm(formData).then((res) => {
      console.log(res);
      window.location.reload()
    })
    .catch((err) => console.log(err));
  };
  return (
    <div className="bg-red-500">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-10 py-4">
      <label>
    Farm Name:
    <input name="name" value={formData.name} onChange={handleChange} placeholder="Farm Name" />
  </label>
  <label>
    Farm Size:
    <input type="number" name="size" value={formData.size} onChange={handleChange} placeholder="Farm Size" />
  </label>
  <label>
    Planted Percentage:
    <input type="number" name="planted_percentage" value={formData.planted_percentage} onChange={handleChange} placeholder="Planted Percentage" />
  </label>
  <label>
    Harvest Percentage:
    <input type="number" name="harvest_percentage" value={formData.harvest_percentage} onChange={handleChange} placeholder="Harvest Percentage" />
  </label>
  <label>
    Crops:
    <input name="crops" value={formData.crops} onChange={handleChange} placeholder="Crops" />
  </label>
  <label>
    Workers:
    <input name="workers" value={formData.workers} onChange={handleChange} placeholder="Workers" />
  </label>
  <label>
    Equipments:
    <input name="equipments" value={formData.equipments} onChange={handleChange} placeholder="Equipments" />
  </label>
  <label>
    Fertilizers:
    <input name="fertilizers" value={formData.fertilizers} onChange={handleChange} placeholder="Fertilizers" />
  </label>
  <label>
    Medicines:
    <input name="medicines" value={formData.medicines} onChange={handleChange} placeholder="Medicines" />
  </label>
        <button type="submit">Create Farm</button>
      </form>
    </div>
  )
}

export default FarmCreation