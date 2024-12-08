import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://fullstack-cht-backend.onrender.com" : "/api",
  withCredentials: true,
});