import React from "react";
import { Code } from "native-base";
import { Wrapper } from "../../components";
export const CodeUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Code colorScheme="success">Hello World!</Code>
    </Wrapper>
  );
};
