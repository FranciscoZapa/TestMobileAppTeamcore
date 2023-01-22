import React from 'react';
import {Box, Heading, Text} from 'native-base';
import {HeaderBase} from './HeaderBase';
import {styles} from '../styles/header/HeaderBase';
import {description, welcome} from '../utils/constants';

export const Header = (): JSX.Element => {
  return (
    <HeaderBase>
      <Heading style={styles.title}>
        <Text style={styles.text}>{welcome}</Text>
      </Heading>
      <Box style={styles.description}>
        <Text style={styles.text}>{description}</Text>
      </Box>
    </HeaderBase>
  );
};
