import React from 'react';
import {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import {Form} from '../components/Form';
import {SubmitButton} from '../components/SubmitButton';
import {useQuestions} from '../hooks/useQuestions';

type Screen = PropsWithChildren<{navigation: any}>;

export const FormScreen = ({navigation}: Screen): JSX.Element => {
  const {data, loading, error} = useQuestions();

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>Text</Text>;
  }

  return (
    <>
      <Form data={data} />
      <SubmitButton />
    </>
  );
};
