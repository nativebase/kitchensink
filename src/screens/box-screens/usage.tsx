import React from "react";
import { Box } from "native-base";
import { Wrapper } from "../../components";
export const BoxUsage = () => {
  return (
    <Wrapper>
      <Box width="100%" bg="orange.300" p={4} color="white" shadow={4}>
        This is a Box
      </Box>
    </Wrapper>
  );
};
