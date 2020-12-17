import React from "react";
import { CircularProgress, Heading, Center } from "native-base";
import { Wrapper } from "../../components";
export const CircularProgressColor = function () {
  return (
    <Wrapper>
      <Center>
        <Heading>Changing the color</Heading>
        <CircularProgress mt={6} value={50} color="red.200" />
      </Center>
    </Wrapper>
  );
};
