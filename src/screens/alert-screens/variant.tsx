import React from "react";
import { Alert, Stack } from "native-base";

import { Wrapper } from "../../components";
export const AlertVariants = function (props: any) {
  return (
    <Wrapper {...props}>
      <Stack space={4} mx={3}>
        <Alert variant="solid" status="teal">
          <Alert.Icon />
          <Alert.Title>Alert Solid Variant</Alert.Title>
        </Alert>
        <Alert variant="left-accent" status="success">
          <Alert.Icon />
          <Alert.Title>Alert Left Accent Variant</Alert.Title>
        </Alert>
        <Alert variant="top-accent" status="error">
          <Alert.Icon />
          <Alert.Title>Alert Top Accent Variant</Alert.Title>
        </Alert>
        <Alert status="warning" variant="subtle">
          <Alert.Icon />
          <Alert.Title>Alert Default/Subtle Variant</Alert.Title>
        </Alert>
        <Alert status="info" variant="outline">
          <Alert.Icon />
          <Alert.Title>Alert Outline Variant</Alert.Title>
        </Alert>
        <Alert status="info" variant="outline-light">
          <Alert.Icon />
          <Alert.Title>Alert Outline Light Variant</Alert.Title>
        </Alert>
      </Stack>
    </Wrapper>
  );
};
