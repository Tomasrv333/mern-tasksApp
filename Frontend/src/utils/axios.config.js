import axios from 'axios';

const developmentBaseUrl = `http://127.0.0.1:${process.env.PORT}/`;
const productionBaseUrl = 'https://mern-task-app-backend-vqnh.onrender.com';

const axiosInstance = axios.create({
  maxContentLength: 1048576,
  baseURL: process.env.NODE_ENV === 'production' ? productionBaseUrl : developmentBaseUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;