import React from "react";
import { Heading } from "native-base";
import { Wrapper } from "../../components";

export const HeadingUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Heading> I'm a Heading</Heading>
    </Wrapper>
  );
};
