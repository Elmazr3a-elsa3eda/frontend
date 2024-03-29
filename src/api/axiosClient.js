import axios from "axios";

const apiUrl = "https://elamzraa-farm-backend.vercel.app/api";
// const apiUrl = "http://localhost:3005/api";
const apiKey = import.meta.env.VITE_API_KEY;

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers:{
    'api-key': `${apiKey}`,
  }
});

export default axiosClient;