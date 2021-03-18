import React from "react";
import { AspectRatio, Box } from "native-base";
import { Wrapper } from "../../components";
export const AspectRatioUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <AspectRatio height={200} bg="black">
        <Box bg="red.400" />
      </AspectRatio>
    </Wrapper>
  );
};
