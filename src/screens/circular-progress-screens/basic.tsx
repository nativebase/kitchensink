import React from "react";
import { CircularProgress, Heading, Center } from "native-base";
import { Wrapper } from "../../components";
export const CircularProgressUsage = function () {
  return (
    <Wrapper>
      <Center>
        <Heading>Default CircularProgress</Heading>
        <CircularProgress mt={6} value={80} />
      </Center>
    </Wrapper>
  );
};
