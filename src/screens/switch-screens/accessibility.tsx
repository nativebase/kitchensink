import React from "react";
import { Switch, HStack, Text } from "native-base";
import { Wrapper } from "../../components";

export const SwitchAccessibility = function () {
  return (
    <Wrapper>
       <Switch
      accessibilityLabel="switch-accessible"
      accessibilityHint="turn on or off"
    />
    </Wrapper>
  );
};
