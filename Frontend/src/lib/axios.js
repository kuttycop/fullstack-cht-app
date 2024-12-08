import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? process.env.APPLICATION_URL : "/api",
  withCredentials: true,
});