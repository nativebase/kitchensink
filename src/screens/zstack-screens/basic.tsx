import React from "react";
import { ZStack, Box } from "native-base";
import { Wrapper } from "../../components";

export const ZStackUsage = function () {
  return (
    <Wrapper>
      <ZStack alignItems="center">
        <Box p={16} bg="black" />
        <Box p={10} bg="red.200" />
      </ZStack>
    </Wrapper>
  );
};
