import {axiosInstance} from '../libs/axios';

export const getQuestionsService = async () => {
  return await axiosInstance.get('/api/questions');
};
