import React from "react";
import { Stack, Alert, HStack } from "native-base";

import { Wrapper } from "../../components";
export const AlertStatus = function (props: any) {
  return (
    <Wrapper {...props}>
      <HStack>
        {["subtle", "solid", "outline"].map((key: any) => (
          <Stack space={3} mx={3}>
            <Alert status="error" variant={key}>
              <Alert.Icon />
              <Alert.Title>This is an error alert</Alert.Title>
            </Alert>
            <Alert status="warning" variant={key}>
              <Alert.Icon />
              <Alert.Title>This is a warning alert</Alert.Title>
            </Alert>
            <Alert status="info" variant={key}>
              <Alert.Icon />
              <Alert.Title>This is an info alert</Alert.Title>
            </Alert>
            <Alert status="success" variant={key}>
              <Alert.Icon />
              <Alert.Title>This is a success alert</Alert.Title>
            </Alert>
          </Stack>
        ))}
      </HStack>
    </Wrapper>
  );
};
