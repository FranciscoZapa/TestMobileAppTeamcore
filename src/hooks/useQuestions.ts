import {useState, useEffect} from 'react';
import {setQuestions} from '../core/features/form/formSlice';
import {store} from '../core/store';
import {getQuestionsService} from '../services/FormServices';
import {QuestionState} from '../types/form/formTypes';

export const useQuestions = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await getQuestionsService();
        const values: Array<QuestionState> = await res.data.data;
        store.dispatch(setQuestions(values));
        setLoading(false);
      } catch (e: any) {
        console.error(e);
        setError(e);
        setLoading(false);
      }
    }

    getQuestions();
  }, []);

  return {loading, error};
};
