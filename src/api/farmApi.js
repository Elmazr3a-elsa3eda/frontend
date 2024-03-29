import axiosClient from "./axiosClient";

const createFarm = (data) => axiosClient.post("/farm", data);
// const createFarm = (data) => console.log(data);

const getFarmByUser = (userId) => axiosClient.get(`farm/user/${userId}`);

const getFarmById = (farmId) => axiosClient.get(`farm/${farmId}`);

const addWorker = (farmId, workerID) => axiosClient.post(`farm/${farmId}/addWorkers`, {workerIds: [workerID]});

const removeWorker = (farmId, workerId) => axiosClient.delete(`farm/${farmId}/removeWorker/${workerId}`);

const getFarmCrops = (farmId) => axiosClient.get(`farm/${farmId}/crops`);

export default {
  createFarm,
  getFarmByUser,
  getFarmById,
  addWorker,
  removeWorker,
  getFarmCrops
};