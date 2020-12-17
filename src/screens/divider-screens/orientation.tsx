import React from "react";
import { Divider, Center, Box } from "native-base";
import { Wrapper } from "../../components";

export const DividerOrientation = function () {
  return (
    <Wrapper>
      <Box w="100%">
        <Divider orientation="horizontal" mb={4} />
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
      </Box>
    </Wrapper>
  );
};
