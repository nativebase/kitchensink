import React from "react";
import { PinInput, PinInputField } from "native-base";
import { Wrapper } from "../../components";

export const PinInputManageFocus = function () {
  return (
    <Wrapper>
      <PinInput manageFocus={false}>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </Wrapper>
  );
};
