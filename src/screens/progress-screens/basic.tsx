import React from "react";
import { Box, Progress, Heading, Center } from "native-base";
import { Wrapper } from "../../components";

export const ProgressUsage = function () {
  return (
    <Wrapper>
      <Box w="90%">
        <Center mb={8}>
          <Heading>This is a Simple Progress Bar</Heading>
        </Center>
        <Progress value={45} />
      </Box>
    </Wrapper>
  );
};
