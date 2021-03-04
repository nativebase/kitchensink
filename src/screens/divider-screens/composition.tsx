import React from "react";
import { Divider, Flex, Text } from "native-base";
import { Wrapper } from "../../components";

export const DividerComposition = function () {
  return (
    <Wrapper>
      <Flex direction="row" p={4}>
        <Text>Simple</Text>
        <Divider bg="red.500" w={1} mx={4} orientation="vertical" />
        <Text>Easy</Text>
        <Divider bg="blue.500" mx={4} orientation="vertical" />
        <Text>Beautiful</Text>
        <Divider bg="green.500" mx={4} orientation="vertical" />
        <Text>Nativebase</Text>
      </Flex>
    </Wrapper>
  );
};
