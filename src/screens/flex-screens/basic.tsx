import React from "react";
import { Flex, Text, Center } from "native-base";
import { Wrapper } from "../../components";

export const FlexUsage = function () {
  return (
    <Wrapper>
      <Flex h={500} w={100}>
        <Center w={100} h={100} bg="green.500">
          Box 1
        </Center>
        <Center bg="blue.300" h={100} w={100}>
          Box 2
        </Center>
        <Center flex={1} bg="tomato">
          Box 3
        </Center>
      </Flex>
    </Wrapper>
  );
};
