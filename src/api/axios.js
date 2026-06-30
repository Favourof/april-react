import axios from "axios";

const baseURL = "http://localhost:4000/api/v1";

export const publicInstance = axios.create({ baseURL });

export const privateInstance = axios.create({ baseURL });

privateInstance.interceptors.request.use((config) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2YTBhZDNjNDdiZGE3MTdiMWVmM2RhMTYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3ODI4MTA3MDcsImV4cCI6MTc4MzQxNTUwN30.l7RQh6jCEmTIUe3Xv-Rzgb-srvOuXxlduOf-xOsnLPE";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
