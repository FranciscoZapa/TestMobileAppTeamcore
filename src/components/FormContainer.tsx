import React, {PropsWithChildren} from 'react';
import {Box} from 'native-base';
import {styles} from '../styles/form/FormStyles';

type FormContainerProps = PropsWithChildren<{}>;

export const FormContainer = ({children}: FormContainerProps): JSX.Element => {
  return (
    <Box
      maxH={'99%'}
      maxW={'100%'}
      rounded="lg"
      overflow="hidden"
      borderColor="brand.700"
      padding={'3'}
      style={styles.form}>
      {children}
    </Box>
  );
};
