import React from "react";
import { Box, useBreakpointValue } from "native-base";
import { Wrapper } from "../../components";
export const UseBreakpointValueUsage = () => {
  const color = useBreakpointValue({
    base: "red.200",
    sm: "blue.200",
    md: "blue.200",
  });
  return (
    <Wrapper>
      <Box bg={color} w={"100px"}>
        This is a box
      </Box>
    </Wrapper>
  );
};
