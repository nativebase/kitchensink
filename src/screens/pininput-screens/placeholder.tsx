import React from "react";
import { PinInput } from "native-base";
import { Wrapper } from "../../components";

export const PinInputPlaceholder = function (props: any) {
  return (
    <Wrapper {...props}>
      <PinInput placeholder="🥳">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
    </Wrapper>
  );
};
