import React from "react";
import { Switch, HStack, Text } from "native-base";
import { Wrapper } from "../../components";

export const SwitchUsage = function () {
  return (
    <Wrapper>
      <HStack>
        <Text>Enable email alerts?</Text>
        <Switch />
      </HStack>
    </Wrapper>
  );
};
