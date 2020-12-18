import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "native-base";
import { Wrapper } from "../../components";

export const FormControlUsage = function () {
  return (
    <Wrapper>
      <FormControl isRequired isInvalid>
        <FormLabel>Favorite framework</FormLabel>
        <Input p={2} placeholder="Is it react?" />
        <FormHelperText>We'll keep this between us.</FormHelperText>
        <FormErrorMessage>Something is wrong.</FormErrorMessage>
      </FormControl>
    </Wrapper>
  );
};
