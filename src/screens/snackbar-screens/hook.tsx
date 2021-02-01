import React from 'react';
import {
  Button,
  Alert,
  AlertIcon,
  AlertDescription,
  useSnackbar,
  VStack,
  AlertTitle,
} from 'native-base';
import { Wrapper } from '../../components';
export const SnackbarHook = function () {
  const { setSnackbar } = useSnackbar();
  const template = (
    <Alert status='success'>
      <AlertIcon />
      <AlertTitle>Simple Snack</AlertTitle>
      <AlertDescription>Welldone, we are proud of you.</AlertDescription>
    </Alert>
  );
  return (
    <Wrapper>
      <VStack space={3}>
        <Button
          onPress={() =>
            setSnackbar(template, {
              accessibilityAnnouncement: 'Welldone, we are proud of you.',
            })
          }
        >
          Get Default Snackbar
        </Button>
        <Button
          onPress={() =>
            setSnackbar(template, {
              enableOverlay: true,
              placement: 'top',
              accessibilityAnnouncement: 'Welldone, we are proud of you.',
            })
          }
        >
          Get Snackbar With Overlay
        </Button>
      </VStack>
    </Wrapper>
  );
};
