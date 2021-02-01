import React from 'react';
import {
  Stack,
  AlertDescription,
  Alert,
  AlertIcon,
  AlertTitle,
} from 'native-base';

import { Wrapper } from '../../components';
export const AlertStatus = function () {
  return (
    <Wrapper>
      <Stack space={3} mx={3}>
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>There was an error.</AlertDescription>
        </Alert>

        <Alert status='success'>
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>Data uploaded to the server.</AlertDescription>
        </Alert>

        <Alert status='warning'>
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>Your account is about expire</AlertDescription>
        </Alert>

        <Alert status='default'>
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>NativeBase is going live soon.</AlertDescription>
        </Alert>
      </Stack>
    </Wrapper>
  );
};
