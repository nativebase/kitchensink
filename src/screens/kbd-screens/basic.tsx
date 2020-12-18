import React from "react";
import { VStack, HStack, Kbd, Text } from "native-base";
import { Wrapper } from "../../components";

export const KbdUsage = function () {
  return (
    <Wrapper>
      <VStack space={8}>
        <HStack>
          <Kbd>shift</Kbd>
          <Text> + </Text>
          <Kbd>C</Kbd>
        </HStack>
        <HStack>
          <Kbd>shift</Kbd>
          <Text> then </Text>
          <Kbd>H</Kbd>
        </HStack>
        <HStack>
          <Kbd>alt</Kbd>
          <Text> or </Text>
          <Kbd>option</Kbd>
        </HStack>
      </VStack>
    </Wrapper>
  );
};
