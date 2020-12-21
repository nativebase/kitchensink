import React from "react";
import { Box, Progress, Center, Heading } from "native-base";
import { Wrapper } from "../../components";

export const ProgressBgColor = function () {
  return (
    <Wrapper>
      <Box w="90%">
        <Center mb={8}>
          <Heading>Custom Track Color</Heading>
        </Center>
        <Progress
          size="lg"
          colorScheme="warning"
          bg="teal.200"
          mb={4}
          value={75}
        />
      </Box>
    </Wrapper>
  );
};
