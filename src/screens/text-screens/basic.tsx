import React from "react";
import { Text } from "native-base";
import { Wrapper } from "../../components";

export const TextBasic = function (props: any) {
  return (
    <Wrapper {...props}>
      <Text>This is Text.</Text>
    </Wrapper>
  );
};
