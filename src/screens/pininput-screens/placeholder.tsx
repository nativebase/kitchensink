import React from "react";
import { PinInput, PinInputField } from "native-base";
import { Wrapper } from "../../components";

export const PinInputPlaceholder = function () {
  return (
    <Wrapper>
      <PinInput placeholder="🥳">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </Wrapper>
  );
};
