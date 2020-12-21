import React from "react";
import {
  PinInput,
  PinInputField,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "native-base";
import { Wrapper } from "../../components";

export const PinInputFormControlled = function () {
  return (
    <Wrapper>
      <Center>
        <FormControl isRequired isInvalid>
          <FormLabel>OTP</FormLabel>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
          <FormHelperText>
            An otp is send to number ending with +91-XXXXX-XX007.
          </FormHelperText>
          <FormErrorMessage>Please Retry.</FormErrorMessage>
        </FormControl>
      </Center>
    </Wrapper>
  );
};
