import React, {PropsWithChildren} from 'react';
import {FlatList, Text} from 'react-native';
import {Question} from './Question';

type FormProps = PropsWithChildren<{
  data: Array<{
    answers: Array<{answer: string; answer_id: string}> | null;
    question: string;
    question_id: string;
  }> | null;
}>;

export const Form = ({data}: FormProps): JSX.Element => {
  if (data && data.length === 0) {
    return <Text>no hay</Text>;
  }
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Question
          question={item.question}
          answers={item.answers}
          id={item.question_id}
        />
      )}
      keyExtractor={item => item.question_id}
    />
  );
};
