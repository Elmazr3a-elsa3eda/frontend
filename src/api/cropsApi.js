import axiosClient from "./axiosClient";

const getAllCrops = () => axiosClient.get("/crops",);

const createCrop = (data) => axiosClient.post("/crops", data);

const patchCrop = (id, data) => axiosClient.patch(`/crops/${id}`, data);

const deletCrop = (id, farmId) => axiosClient.delete(`/crops/${id}`, { data: { farmId } });

export default {
  getAllCrops,
  createCrop,
  patchCrop,
  deletCrop
};