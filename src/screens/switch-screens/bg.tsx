import React from "react";
import { Switch } from "native-base";
import { Wrapper } from "../../components";

export const SwitchBgColor = function () {
  return (
    <Wrapper>
      <Switch colorScheme="red"  offTrackColor="gray" />
      <Switch colorScheme="teal" offTrackColor="gray" size="lg" />
    </Wrapper>
  );
};
