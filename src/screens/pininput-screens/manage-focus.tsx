import React from "react";
import { PinInput } from "native-base";
import { Wrapper } from "../../components";

export const PinInputManageFocus = function () {
  return (
    <Wrapper>
      <PinInput manageFocus={false}>
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
    </Wrapper>
  );
};
