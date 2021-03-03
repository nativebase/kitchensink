import React from "react";
import { PinInput } from "native-base";
import { Wrapper } from "../../components";

export const PinInputPlaceholder = function () {
  return (
    <Wrapper>
      <PinInput placeholder="🥳">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
    </Wrapper>
  );
};
