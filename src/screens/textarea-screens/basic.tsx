import React from "react";
import { TextArea, Heading, Center, Text, Stack } from "native-base";
import { Wrapper } from "../../components";

export const TextAreaUsage = function () {
  return (
    <Wrapper>
      <Stack space={4}>
        <Center>
          <Heading>TextArea</Heading>
        </Center>
        <Center>
          <Text>Default TextArea</Text>
        </Center>
        <TextArea w="90%" h="100" placeholder="Text Area Placeholder" />
      </Stack>
    </Wrapper>
  );
};
