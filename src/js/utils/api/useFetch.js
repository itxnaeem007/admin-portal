import axios from "axios";
import { URL } from "../constant";


const axiosInstance = axios.create({
  baseURL: URL,
});
axiosInstance.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
    };
    if (localStorage.getItem("token")) {
      config.headers.Authorization = `${localStorage.getItem("token")}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      // your failure logic
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export { axiosInstance };
