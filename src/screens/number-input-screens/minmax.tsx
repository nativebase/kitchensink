import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "native-base";
import { Wrapper } from "../../components";
export const NumberInpMinMax = function (props: any) {
  return (
    <Wrapper {...props}>
      <NumberInput defaultValue="10" min={5} max={20}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Wrapper>
  );
};
