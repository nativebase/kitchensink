import React from "react";
import { Switch, VStack } from "native-base";
import { Wrapper } from "../../components";

export const SwitchSize = function (props: any) {
  return (
    <Wrapper {...props}>
      <VStack space={4}>
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
      </VStack>
    </Wrapper>
  );
};
