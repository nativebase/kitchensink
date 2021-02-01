import React from 'react';
import { Alert, Stack, AlertTitle, AlertIcon } from 'native-base';

import { Wrapper } from '../../components';
export const AlertVariants = function () {
  return (
    <Wrapper>
      <Stack space={4} mx={3}>
        <Alert variant='solid' status='teal'>
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertTitle>Alert Solid Variant</AlertTitle>
        </Alert>
        <Alert variant='left-accent' status='success'>
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertTitle>Alert Left Accent Variant</AlertTitle>
        </Alert>
        <Alert variant='top-accent' status='error'>
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertTitle>Alert Top Accent Variant</AlertTitle>
        </Alert>
        <Alert status='warning'>
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertTitle>Alert Default/Subtle Variant</AlertTitle>
        </Alert>
      </Stack>
    </Wrapper>
  );
};
