import React from "react";
import { Alert, Box } from "native-base";
import { Wrapper } from "../../components";
export const AlertUsage = function () {
  return (
    <Wrapper>
      <Box mx={3}>
        <Alert status="error">
          <Alert.Icon />
          <Alert.Title>Error Alert</Alert.Title>
          <Alert.Description>description goes here</Alert.Description>
        </Alert>
      </Box>
    </Wrapper>
  );
};
