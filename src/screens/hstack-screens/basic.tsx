import React from "react";
import { HStack, Text, Divider, Heading, Stack } from "native-base";
import { Wrapper } from "../../components";

export const HStackUsage = function () {
  return (
    <Wrapper>
      <Stack space={4}>
        <Heading>HStack</Heading>
        <HStack divider={<Divider borderColor="red.200" />} reversed space={8}>
          <Text>Test Text</Text>
          <Text>Testing this text with HStacks</Text>
        </HStack>
      </Stack>
    </Wrapper>
  );
};
