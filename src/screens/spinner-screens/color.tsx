import React from "react";
import { Spinner, HStack } from "native-base";
import { Wrapper } from "../../components";

export const SpinnerColor = function (props: any) {
  return (
    <Wrapper {...props}>
      <HStack space={2}>
        <Spinner color="danger.400" />
        <Spinner color="blue.500" />
        <Spinner color="gray.900" />
        <Spinner color="warning.500" />
      </HStack>
    </Wrapper>
  );
};
