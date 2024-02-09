import axios from 'axios';

const unauthAxios = () => {
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use(
    async (req) => {
      return req;
    },
    (error) => {
      console.error(error);
      return Promise.reject(error);
    },
  );
  return axiosInstance;
};

export default unauthAxios;
