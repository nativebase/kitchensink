import React from "react";
import { TextArea, Heading, Center, Text, Stack } from "native-base";
import { Wrapper } from "../../components";

export const TextAreaInvalidDisabled = function () {
  return (
    <Wrapper>
      <Stack space={4}>
        <Center>
          <Heading>TextArea</Heading>
        </Center>
        <Center>
          <Text>Invalid TextArea</Text>
        </Center>
        <TextArea placeholder="Invalid TextArea" w="90%" isInvalid />
        <Center>
          <Text>Disabled TextArea</Text>
        </Center>
        <TextArea placeholder="Disabled TextArea" w="90%" isDisabled />
      </Stack>
    </Wrapper>
  );
};
