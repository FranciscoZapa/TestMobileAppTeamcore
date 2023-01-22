import React, {useCallback} from 'react';
import {Form} from '../components/Form';
import {SubmitButton} from '../components/SubmitButton';
import {useAppSelector} from '../core/hooks';
import {useQuestions} from '../hooks/useQuestions';
import {Box} from 'native-base';
import {styles} from '../styles/form/FormScreenStyles';
import {Header} from '../components/Header';
import {useSendForm} from '../hooks/useSendForm';
import {Screen} from '../types/screens/screenTypes';
import {Loading} from '../components/Loading';
import {ErrorMessage} from '../components/ErrorMessage';

export const FormScreen = ({navigation}: Screen): JSX.Element => {
  const {questions, answers, formIsFull} = useAppSelector(state => state.form);
  const {loading, error} = useQuestions();
  const {loading: loadingSend, sendForm} = useSendForm(
    formIsFull,
    answers,
    navigation,
  );

  const handleSubmit = useCallback(async () => {
    sendForm();
  }, [sendForm]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <Box height={'100%'} style={styles.container}>
      <Header />
      <Form data={questions} />
      <SubmitButton
        onPress={handleSubmit}
        disabled={!formIsFull}
        loading={loadingSend}
      />
    </Box>
  );
};
