import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  Box,
} from 'native-base';
import { Wrapper } from '../../components';
export const AlertUsage = function () {
  return (
    <Wrapper>
      <Box mx={3}>
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>description goes here</AlertDescription>
        </Alert>
      </Box>
    </Wrapper>
  );
};
