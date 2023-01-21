import React, {PropsWithChildren} from 'react';
import {FlatList} from 'react-native';
import {AnswerStruct} from '../types/form/formTypes';
import {Answer} from './Answer';

type AnswersProps = PropsWithChildren<{
  answers: Array<AnswerStruct> | null;
  id: string;
}>;

export const Answers = ({answers, id}: AnswersProps): JSX.Element => {
  return (
    <FlatList
      data={answers}
      renderItem={({item}) => (
        <Answer
          answer={item.answer}
          answer_id={item.answer_id}
          question_id={id}
        />
      )}
      keyExtractor={item => item.answer_id}
    />
  );
};
