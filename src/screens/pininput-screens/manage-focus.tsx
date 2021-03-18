import React from "react";
import { PinInput } from "native-base";
import { Wrapper } from "../../components";

export const PinInputManageFocus = function (props: any) {
  return (
    <Wrapper {...props}>
      <PinInput manageFocus={false}>
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
    </Wrapper>
  );
};
