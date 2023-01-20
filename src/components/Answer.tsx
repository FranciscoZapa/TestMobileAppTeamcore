import React, {PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/FormScreenStyles';

type QuestionProps = PropsWithChildren<{
  answer: string;
  id: string;
}>;

export const Answer = ({answer, id}: QuestionProps): JSX.Element => {
  return (
    <View style={styles.sectionContainer} id={id}>
      <Text style={[styles.sectionTitle]}>{answer}</Text>
    </View>
  );
};
