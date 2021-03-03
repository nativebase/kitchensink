import React from "react";
import { CircularProgress, Center, Heading } from "native-base";
import { Wrapper } from "../../components";
export const CircularProgressIndeterminate = function () {
  return (
    <Wrapper>
      <Center>
        <Heading>Indeterminate Progress</Heading>
        <CircularProgress mt={6} value={50} isIndeterminate color="red.200">
          <CircularProgress.Label>50%</CircularProgress.Label>
        </CircularProgress>
      </Center>
    </Wrapper>
  );
};
