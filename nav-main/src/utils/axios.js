import axios from "axios";
import Storage from "./localStorage";

const storage = new Storage();

const toLogin = (test) => {
  location.replace("/login");
};

const errorHandler = (status) => {
  switch (status) {
    case 401:
      toLogin();
      break;
    default:
      break;
  }
};

const myAxios = axios.create({
  baseUrl: "http://localhost:5173",
  timeout: 5000,
});

myAxios.interceptors.request.use(
  function (config) {
    const token = storage.get("TOKEN");
    token && (config.headers.Authorization = token);
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

myAxios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (err) {
    errorHandler(err.response?.data?.message);
  }
);

export default myAxios;
