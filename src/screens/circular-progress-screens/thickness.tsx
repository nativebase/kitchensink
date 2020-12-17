import React from "react";
import { CircularProgress, Heading, Center } from "native-base";
import { Wrapper } from "../../components";
export const CircularProgressThickness = function () {
  return (
    <Wrapper>
      <Center>
        <Heading>Changing the thickness</Heading>
        <CircularProgress mt={6} value={30} thickness={7} />
      </Center>
    </Wrapper>
  );
};
