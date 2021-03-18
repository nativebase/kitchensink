import React from "react";

import { Input, Stack } from "native-base";
import { Wrapper } from "../../components";

export const InputFocusError = (props: any) => {
  return (
    <Wrapper {...props}>
      <Stack space={4}>
        <Input
          placeholder="Here is a sample placeholder"
          focusBorderColor="green"
        />
        <Input
          placeholder="Here is a sample placeholder"
          focusBorderColor="pink"
        />
        <Input placeholder="Here is a sample placeholder" isInvalid />
        <Input
          placeholder="Here is a sample placeholder"
          isInvalid
          errorBorderColor="yellow"
          errorMessage="This is an Error Message"
        />
      </Stack>
    </Wrapper>
  );
};
