import React from "react";
import {
  Alert,
  Stack,
  AlertTitle,
  AlertIcon,
  AlertCloseButton,
} from "native-base";

import { Wrapper } from "../../components";
export const AlertVariants = function () {
  return (
    <Wrapper>
      <Stack space={4} mx={3}>
        <Alert variant="solid" status="teal">
          <AlertIcon />
          <AlertTitle>Alert Solid Variant</AlertTitle>
          <AlertCloseButton />
        </Alert>
        <Alert variant="left-accent" status="success">
          <AlertIcon />
          <AlertTitle>Alert Left Accent Variant</AlertTitle>
          <AlertCloseButton />
        </Alert>
        <Alert variant="top-accent" status="error">
          <AlertIcon />
          <AlertTitle>Alert Top Accent Variant</AlertTitle>
          <AlertCloseButton />
        </Alert>
        <Alert status="warning">
          <AlertIcon />
          <AlertTitle>Alert Default/Subtle Variant</AlertTitle>
          <AlertCloseButton />
        </Alert>
      </Stack>
    </Wrapper>
  );
};
