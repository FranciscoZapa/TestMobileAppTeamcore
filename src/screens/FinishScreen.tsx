import React from 'react';
import {Box, Button, Heading, HStack, Text} from 'native-base';
import {styles} from '../styles/finish/FinishScreenStyles';
import {exit, goBack, surveyFinished} from '../utils/constants';
import {Screen} from '../types/screens/screenTypes';
import {exitApplication} from '../utils/appFunctions';

export const FinishScreen = ({navigation}: Screen): JSX.Element => {
  return (
    <Box
      alignItems="center"
      justifyContent="space-evenly"
      height={'100%'}
      style={styles.box}>
      <Heading>
        <Text style={styles.heading}>{surveyFinished}</Text>
      </Heading>
      <HStack space={10}>
        <Button
          size={'lg'}
          width={100}
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          {goBack}
        </Button>
        <Button
          size={'lg'}
          width={100}
          style={styles.button}
          onPress={() => exitApplication(navigation)}>
          {exit}
        </Button>
      </HStack>
    </Box>
  );
};
