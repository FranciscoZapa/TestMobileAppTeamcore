import React, {PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/FormScreenStyles';
import {Answers} from './Answers';

type QuestionProps = PropsWithChildren<{
  question: string;
  answers: Array<{answer: string; answer_id: string}> | null;
  id: string;
}>;

export const Question = ({
  question,
  answers,
  id,
}: QuestionProps): JSX.Element => {
  console.log(question, answers, id);
  return (
    <View style={styles.sectionContainer} id={id}>
      <Text style={[styles.sectionTitle]}>{question}</Text>
      <Answers answers={answers} />
    </View>
  );
};
