import axiosClient from "./axiosClient";

const getAllCrops = () => axiosClient.get("/crops",);

const createCrop = (data) => axiosClient.post("/crops", data);

export default {
  getAllCrops,
  createCrop
};