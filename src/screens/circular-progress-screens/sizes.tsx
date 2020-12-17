import React from "react";
import { CircularProgress, Heading, Center } from "native-base";
import { Wrapper } from "../../components";
export const CircularProgressSize = function () {
  return (
    <Wrapper>
      <Center>
        <Heading>Changing the size</Heading>
        <CircularProgress mt={6} value={60} size={60} />
      </Center>
    </Wrapper>
  );
};
