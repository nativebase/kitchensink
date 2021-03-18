import React from "react";
import { CircularProgress, Heading, Center } from "native-base";
import { Wrapper } from "../../components";
export const CircularProgressUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Center>
        <Heading>Default CircularProgress</Heading>
        <CircularProgress mt={6} value={75} />
      </Center>
    </Wrapper>
  );
};
