import {Checkbox, Text} from 'native-base';
import React, {PropsWithChildren, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {setAnswer} from '../core/features/form/formSlice';
import {useAppSelector} from '../core/hooks';
import {styles} from '../styles/form/AnswerStyles';
import {AnswerStruct} from '../types/form/formTypes';

type QuestionProps = PropsWithChildren<AnswerStruct>;

export const Answer = ({
  answer,
  answer_id,
  question_id,
}: QuestionProps): JSX.Element => {
  const dispatch = useDispatch();
  const {answers} = useAppSelector(state => state.form);
  const handleClick = useCallback(
    () => dispatch(setAnswer({answer, answer_id, question_id})),
    [],
  );
  const isThisAnswerSelected = useCallback(() => {
    const selectedAnswer = answers.find(
      item => item.question_id === question_id,
    );
    return selectedAnswer?.answer_id === answer_id;
  }, [answers]);
  return (
    <Checkbox
      isChecked={isThisAnswerSelected()}
      onChange={handleClick}
      value={answer_id}>
      <Text style={styles.text}>{answer}</Text>
    </Checkbox>
  );
};
