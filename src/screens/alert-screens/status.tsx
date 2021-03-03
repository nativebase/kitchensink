import React from "react";
import { Stack, Alert } from "native-base";

import { Wrapper } from "../../components";
export const AlertStatus = function () {
  return (
    <Wrapper>
      <Stack space={3} mx={3}>
        <Alert status="error">
          <Alert.Icon />
          <Alert.Title>Error Alert</Alert.Title>
          <Alert.Description>There was an error.</Alert.Description>
        </Alert>

        <Alert status="success">
          <Alert.Icon />
          <Alert.Title>Error Alert</Alert.Title>
          <Alert.Description>Data uploaded to the server.</Alert.Description>
        </Alert>

        <Alert status="warning">
          <Alert.Icon />
          <Alert.Title>Error Alert</Alert.Title>
          <Alert.Description>Your account is about expire</Alert.Description>
        </Alert>

        <Alert status="default">
          <Alert.Icon />
          <Alert.Title>Error Alert</Alert.Title>
          <Alert.Description>NativeBase is going live soon.</Alert.Description>
        </Alert>
      </Stack>
    </Wrapper>
  );
};
