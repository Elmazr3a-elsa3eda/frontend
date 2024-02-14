import axiosClient from "./axiosClient";

const createFarm = ({...data}) => axiosClient.post("/farm", {...data});

const getFarm = (userId) => axiosClient.get(`farm/user/${userId}`);

export default {
  createFarm,
  getFarm
};