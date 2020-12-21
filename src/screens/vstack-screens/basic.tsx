import React from "react";
import { VStack, Text, Divider, Heading } from "native-base";
import { Wrapper } from "../../components";

export const VStackUsage = function () {
  return (
    <Wrapper>
      <VStack
        divider={<Divider borderColor="red.200" />}
        space={4}
        width="100%"
      >
        <Heading>VStack</Heading>
        <Text>Test Text</Text>
        <Text>Testing this text with Stacks</Text>
        <Text>Testing this text with Stacks</Text>
        <Text>Testing this text with Stacks</Text>
      </VStack>
    </Wrapper>
  );
};
