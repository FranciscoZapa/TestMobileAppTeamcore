import {useState} from 'react';
import {axiosInstance} from '../libs/axios';
import {Alert} from 'react-native';
import {store} from '../core/store';
import {resetAnswers} from '../core/features/form/formSlice';

export const useSendForm = (formIsFull, answers, navigation) => {
  const [loading, setLoading] = useState(false);
  const sendForm = async () => {
    if (formIsFull) {
      setLoading(true);
      const body = {
        date: new Date(),
        data: answers.map(item => ({
          question_id: item.question_id,
          answer_id: item.answer_id,
        })),
      };
      const res = await axiosInstance
        .post('/api/answer', body)
        .then(response => {
          setLoading(false);
          return response.status;
        })
        .catch(err => {
          setLoading(false);
          return err;
        });
      if (res && res >= 200 && res <= 299) {
        Alert.alert('Envío Correcto', '¿Deseas enviar otro formulario?', [
          {
            text: 'No',
            onPress: () => {
              navigation.navigate('Finish');
              store.dispatch(resetAnswers());
            },
            style: 'cancel',
          },
          {text: 'Sí', onPress: () => store.dispatch(resetAnswers())},
        ]);
      } else if (res) {
        Alert.alert('Error al procesar el envío: ', res);
      }
    }
  };

  return {loading, sendForm};
};
