import axiosClient from "./axiosClient";

const login = (data) => axiosClient.post("/auth/login", data);
const register = (username, password,role,email) => axiosClient.post("/auth/register",  { username, password, role,email });

export default {
  login,
  register
};