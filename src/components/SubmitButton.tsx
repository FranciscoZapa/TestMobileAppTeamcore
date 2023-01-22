import React, {PropsWithChildren} from 'react';
import {Box, Button} from 'native-base';
import {styles} from '../styles/form/SubmitButtonStyles';
import {submitText, submittingText} from '../utils/constants';

type SubmitButtonProps = PropsWithChildren<{
  onPress: any;
  disabled: boolean;
  loading: boolean;
}>;

export const SubmitButton = ({
  onPress,
  disabled,
  loading,
}: SubmitButtonProps): JSX.Element => {
  return (
    <Box alignItems="center" justifyContent={'center'} height={'10%'}>
      <Button
        onPress={onPress}
        isLoading={loading}
        isLoadingText={submittingText}
        style={styles.button}
        isDisabled={disabled}
        size={'lg'}
        width={150}>
        {submitText}
      </Button>
    </Box>
  );
};
