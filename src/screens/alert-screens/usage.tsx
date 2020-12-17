import React from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  AlertCloseButton,
  Box,
} from "native-base";
import { Wrapper } from "../../components";
export const AlertUsage = function () {
  return (
    <Wrapper>
      <Box mx={3}>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>description goes here</AlertDescription>
          <AlertCloseButton />
        </Alert>
      </Box>
    </Wrapper>
  );
};
