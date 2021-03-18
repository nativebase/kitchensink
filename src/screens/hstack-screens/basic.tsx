import React from "react";
import { HStack, Text, Divider, Heading, Stack } from "native-base";
import { Wrapper } from "../../components";

export const HStackUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Stack space={4} flex={1}>
        <Heading>HStack</Heading>
        <HStack divider={<Divider borderColor="red.200" />} reversed space={8}>
          <Text>Test Text</Text>
          <Text>Testing this text with HStacks</Text>
        </HStack>
      </Stack>
    </Wrapper>
  );
};
