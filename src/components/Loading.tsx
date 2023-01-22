import React from 'react';
import {Box, HStack, Spinner, Heading} from 'native-base';
import {loading} from '../utils/constants';
import {styles} from '../styles/status/LoadingStyles';

export const Loading = (): JSX.Element => (
  <Box
    alignItems="center"
    justifyContent="space-evenly"
    height={'100%'}
    style={styles.box}>
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" color="white" />
      <Heading color="white" fontSize="md">
        {loading}
      </Heading>
    </HStack>
  </Box>
);
