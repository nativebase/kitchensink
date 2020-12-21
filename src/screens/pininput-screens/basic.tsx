import React from "react";
import { PinInput, PinInputField } from "native-base";
import { Wrapper } from "../../components";

export const PinInputUsage = function () {
  return (
    <Wrapper>
      <PinInput size="md" value="32" defaultValue="98">
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </Wrapper>
  );
};
