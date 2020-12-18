import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
} from "native-base";
import { Wrapper } from "../../components";

export const NumberInpFormControlled = function () {
  return (
    <Wrapper>
      <Container>
        <FormControl isRequired isInvalid>
          <FormLabel>How many components we have</FormLabel>
          <NumberInput>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>You can make a guess.</FormHelperText>
          <FormErrorMessage>
            Don't worry, it's just an example.
          </FormErrorMessage>
        </FormControl>
      </Container>
    </Wrapper>
  );
};
