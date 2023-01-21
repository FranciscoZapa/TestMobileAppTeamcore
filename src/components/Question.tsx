import React, {PropsWithChildren} from 'react';
import {styles} from '../styles/form/QuestionStyles';
import {AnswerStruct} from '../types/form/formTypes';
import {Answers} from './Answers';
import {Box, Text} from 'native-base';

type QuestionProps = PropsWithChildren<{
  question: string;
  answers: Array<AnswerStruct> | null;
  id: string;
}>;

export const Question = ({
  question,
  answers,
  id,
}: QuestionProps): JSX.Element => {
  return (
    <Box style={styles.sectionContainer} id={id}>
      <Text alignSelf={'center'} style={[styles.sectionTitle]}>
        {question}
      </Text>
      <Answers answers={answers} id={id} />
    </Box>
  );
};
