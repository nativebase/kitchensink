import React from "react";
import { CircularProgress, Heading, Center } from "native-base";
import { Wrapper } from "../../components";
export const CircularProgressLabelExample = function () {
  return (
    <Wrapper>
      <Center>
        <Heading>Adding label</Heading>
        <CircularProgress mt={6} value={45} size={60} color="red.200">
          <CircularProgress.Label>45%</CircularProgress.Label>
        </CircularProgress>
      </Center>
    </Wrapper>
  );
};
