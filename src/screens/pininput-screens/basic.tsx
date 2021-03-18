import React from "react";
import { PinInput } from "native-base";
import { Wrapper } from "../../components";

export const PinInputUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <PinInput size="md" value="32" defaultValue="98">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
    </Wrapper>
  );
};
