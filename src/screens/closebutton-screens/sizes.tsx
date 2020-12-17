import React from "react";
import { CloseButton, HStack } from "native-base";
import { Wrapper } from "../../components";
export const CloseButtonSize = function () {
  return (
    <Wrapper>
      <HStack space="md">
        <CloseButton size="sm" color="teal.200" />
        <CloseButton size="md" color="red.200" />
        <CloseButton size="lg" color="blue.200" />
      </HStack>
    </Wrapper>
  );
};
