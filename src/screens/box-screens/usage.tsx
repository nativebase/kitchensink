import React from "react";
import { Box } from "native-base";
import { Wrapper } from "../../components";
export const BoxUsage = () => {
  return (
    <Wrapper>
      <Box
        w={"100%"}
        bg="orange.300"
        p={4}
        shadow={4}
        _text={{ fontSize: "lg" }}
      >
        This is a Box
      </Box>
    </Wrapper>
  );
};
