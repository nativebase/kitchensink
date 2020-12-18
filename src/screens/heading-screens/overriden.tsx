import React from "react";
import { Heading } from "native-base";
import { Wrapper } from "../../components";

export const HeadingOverriden = function () {
  return (
    <Wrapper>
      <Heading size="lg" fontSize={50}>
        I'm overriding this heading
      </Heading>
    </Wrapper>
  );
};
