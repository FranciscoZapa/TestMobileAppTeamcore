import React, {PropsWithChildren} from 'react';
import {FlatList, Text} from 'native-base';
import {AnswerStruct} from '../types/form/formTypes';
import {Question} from './Question';
import {styles} from '../styles/form/FormStyles';
import {FormBase} from './FormBase';
import {FormContainer} from './FormContainer';

type FormProps = PropsWithChildren<{
  data: Array<{
    answers: Array<AnswerStruct> | null;
    question: string;
    question_id: string;
  }> | null;
}>;

export const Form = ({data}: FormProps): JSX.Element => {
  if (data && data.length === 0) {
    return <Text>No hay datos</Text>;
  }
  return (
    <FormBase>
      <FormContainer>
        <FlatList
          style={styles.flatlist}
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
      </FormContainer>
    </FormBase>
  );
};
