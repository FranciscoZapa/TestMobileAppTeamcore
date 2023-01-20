import React, {PropsWithChildren} from 'react';
import {FlatList} from 'react-native';
import {Answer} from './Answer';

type AnswersProps = PropsWithChildren<{
  answers: Array<{answer: string; answer_id: string}> | null;
}>;

export const Answers = ({answers}: AnswersProps): JSX.Element => {
  return (
    <FlatList
      data={answers}
      renderItem={({item}) => (
        <Answer answer={item.answer} id={item.answer_id} />
      )}
      keyExtractor={item => item.answer_id}
    />
  );
};
