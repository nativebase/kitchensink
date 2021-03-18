import React from "react";
import { Stack, Box } from "native-base";
import { Wrapper } from "../../components";

export const StackUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Stack space={3} mb={3}>
        <Box borderRadius={4} height={70} width={70} bg="blue.400" />
        <Box borderRadius={4} height={70} width={70} bg="purple.400" />
        <Box borderRadius={4} height={70} width={70} bg="yellow.400" />
      </Stack>
    </Wrapper>
  );
};
