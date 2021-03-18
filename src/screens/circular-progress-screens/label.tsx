import React from "react";
import { CircularProgress, Heading, Center } from "native-base";
import { Wrapper } from "../../components";
export const CircularProgressLabelExample = function (props: any) {
  return (
    <Wrapper {...props}>
      <Center>
        <Heading>Adding Min and Max</Heading>
        <CircularProgress
          mt={6}
          value={550}
          max={1000}
          min={100}
          size={100}
          color="red.200"
        >
          550%
        </CircularProgress>
      </Center>
    </Wrapper>
  );
};
