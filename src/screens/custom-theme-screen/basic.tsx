import React from "react";
import { Heading, VStack } from "native-base";
import { Wrapper } from "../../components";

export const CustomThemeUsage = function () {
  return (
    <Wrapper>
      <VStack>
        <Heading color="custom.100"> I'm a Heading</Heading>
        <Heading color="custom.300"> I'm a Heading</Heading>
      </VStack>
    </Wrapper>
  );
};
