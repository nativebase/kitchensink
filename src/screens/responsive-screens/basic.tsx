import React from "react";
import { Box } from "native-base";
import { Wrapper } from "../../components";
export const ResponsiveUsage = (props: any) => {
  return (
    <Wrapper {...props}>
      <Box bg="red.200" w={["100px", "400px", "560px"]}>
        This is a box
      </Box>
    </Wrapper>
  );
};
