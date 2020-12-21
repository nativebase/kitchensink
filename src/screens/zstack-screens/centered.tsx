import React from "react";
import { ZStack, Box, Text } from "native-base";
import { Wrapper } from "../../components";

export const ZStackCentered = function () {
  return (
    <Wrapper>
      <Box px={8}>
        <ZStack alignItems="center" justifyContent="center">
          <Box p={24} bg="blue.500" />
          <Box p={16} bg="black" />
          <Box p={10} bg="red.200" />
          <Text>Not Inside</Text>
        </ZStack>
      </Box>
    </Wrapper>
  );
};
