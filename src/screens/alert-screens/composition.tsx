import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  Box,
  VStack,
} from 'native-base';
import { Wrapper } from '../../components';
export const AlertComposition = () => {
  return (
    <Wrapper>
      <VStack mx={3} space={3}>
        <Alert
          status='success'
          variant='subtle'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1}>
            Application submitted!
          </AlertTitle>
          <AlertDescription>
            Thanks for submitting your application. Our team will get back to
            you soon.
          </AlertDescription>
        </Alert>

        <Alert status='success'>
          <AlertIcon />
          <Box flex={1}>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your application has been received. We will review your
              application and respond within the next 48 hours.
            </AlertDescription>
          </Box>
        </Alert>
      </VStack>
    </Wrapper>
  );
};
