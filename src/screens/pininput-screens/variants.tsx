import React from "react";
import { PinInput, PinInputField, Stack } from "native-base";
import { Wrapper } from "../../components";

export const PinInputVariant = function () {
  return (
    <Wrapper>
      <Stack space={5}>
        <PinInput variant="outline">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
        <PinInput variant="underlined">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
        <PinInput variant="rounded">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
        <PinInput variant="filled">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
        <PinInput variant="unstyled">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </Stack>
    </Wrapper>
  );
};
