import React from "react";
import { Center } from "native-base";
import { Wrapper } from "../../components";
export const CenterUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Center bg="red.400" height={200} width={200}>
        This is the Center
      </Center>
    </Wrapper>
  );
};
