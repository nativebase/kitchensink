import React from "react";
import { Center } from "native-base";
import { Wrapper } from "../../components";
export const CenterUsage = function () {
  return (
    <Wrapper>
      <Center bg="red.400" height={200} width={200}>
        This is the Center
      </Center>
    </Wrapper>
  );
};
