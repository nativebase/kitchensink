import React from "react";
import { FormControl, Input } from "native-base";
import { Wrapper } from "../../components";

export const FormControlUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Favorite framework</FormControl.Label>
        <Input p={2} placeholder="Is it react?" />
        <FormControl.HelperText>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
    </Wrapper>
  );
};
