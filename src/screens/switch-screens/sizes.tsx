import React from "react";
import { Switch } from "native-base";
import { Wrapper } from "../../components";

export const SwitchSize = function () {
  return (
    <Wrapper>
      <Switch size="sm" colorScheme="success" offTrackColor="gray" />
      <Switch size="md" colorScheme="default" offTrackColor="gray" />
      <Switch size="lg" colorScheme="orange" offTrackColor="gray" />
    </Wrapper>
  );
};
