import React, {PropsWithChildren} from 'react';
import {Box} from 'native-base';

type FormBaseProps = PropsWithChildren<{}>;

export const FormBase = ({children}: FormBaseProps): JSX.Element => {
  return (
    <Box alignItems="center" justifyContent="flex-start" height={'75%'}>
      {children}
    </Box>
  );
};
