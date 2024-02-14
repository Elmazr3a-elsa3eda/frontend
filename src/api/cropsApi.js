import axiosClient from "./axiosClient";

const getAllCrops = () => axiosClient.get("/crops",);

export default {
  getAllCrops,
};