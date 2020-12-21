import React from "react";
import { Spinner, HStack } from "native-base";
import { Wrapper } from "../../components";

export const SpinnerSize = function () {
  return (
    <Wrapper>
      <HStack space={3}>
        <Spinner size="sm" />
        <Spinner size="lg" />
      </HStack>
    </Wrapper>
  );
};
