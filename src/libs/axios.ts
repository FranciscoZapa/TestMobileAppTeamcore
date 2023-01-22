import axios from 'axios';
import {BASE_URL, SECURITY_TOKEN} from '@env';

const baseUrl = BASE_URL;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.defaults.headers.common.Authorization = SECURITY_TOKEN;
