import React from "react";
import {
  Stack,
  AlertDescription,
  Alert,
  AlertIcon,
  AlertCloseButton,
} from "native-base";

import { Wrapper } from "../../components";
export const AlertStatus = function () {
  return (
    <Wrapper>
      <Stack space={3} mx={3}>
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>There was an error.</AlertDescription>
          <AlertCloseButton />
        </Alert>

        <Alert status="success">
          <AlertIcon />
          <AlertDescription>Data uploaded to the server.</AlertDescription>
          <AlertCloseButton />
        </Alert>

        <Alert status="warning">
          <AlertIcon />
          <AlertDescription>Your account is about expire</AlertDescription>
          <AlertCloseButton />
        </Alert>

        <Alert status="default">
          <AlertIcon />
          <AlertDescription>NativeBase is going live soon.</AlertDescription>
          <AlertCloseButton />
        </Alert>
      </Stack>
    </Wrapper>
  );
};
