import React from 'react';
import { Text, Snackbar, Box } from 'native-base';
import { Wrapper } from '../../components';
export const SnackbarUsage = function () {
  return (
    <Wrapper>
      <Text>Snackbar will stay for 10 secs, default is 5 sec.</Text>
      <Snackbar
        duration={10000}
        accessibilityAnnouncement='Sample warning message'
      >
        <Box
          bg={'red.500'}
          h={10}
          justifyContent={'center'}
          alignItems={'center'}
        >
          SnackBar
        </Box>
        <Box
          bg={'red.500'}
          h={10}
          justifyContent={'center'}
          alignItems={'center'}
        >
           Sample Warning message
        </Box>
      </Snackbar>
    </Wrapper>
  );
};
