import React from "react";
import { Code, Stack } from "native-base";
import { Wrapper } from "../../components";
export const CodeColor = function () {
  return (
    <Wrapper>
      <Stack space={4}>
        <Code>let direction = "row";</Code>
        <Code colorScheme="danger">console.log('Hey there!');</Code>
        <Code colorScheme="success">yarn add native-base</Code>
        <Code colorScheme="dark">React Native</Code>
      </Stack>
    </Wrapper>
  );
};
