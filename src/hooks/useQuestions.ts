import {useState, useEffect} from 'react';
import {getQuestionsService} from '../services/FormServices';

export const useQuestions = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await getQuestionsService();
        const values = await res.data.data;
        setData(values);
        setLoading(false);
      } catch (e: any) {
        setError(e);
        setLoading(false);
      }
    }

    getQuestions();
  }, []);

  return {data, loading, error};
};
