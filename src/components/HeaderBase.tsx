import React, {PropsWithChildren} from 'react';
import {Box} from 'native-base';
import {styles} from '../styles/header/HeaderBase';

type HeaderProps = PropsWithChildren<{}>;

export const HeaderBase = ({children}: HeaderProps): JSX.Element => {
  return (
    <Box
      maxH={'99%'}
      maxW={'100%'}
      rounded="lg"
      overflow="hidden"
      borderColor="brand.700"
      margin={'3'}
      style={styles.box}>
      {children}
    </Box>
  );
};
