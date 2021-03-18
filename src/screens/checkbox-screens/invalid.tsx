import React from "react";
import { Checkbox, Text } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxInvalid = function (props: any) {
  return (
    <Wrapper {...props}>
      <Checkbox isInvalid value="invalid">
        <Text mx={2}>Checkbox</Text>
      </Checkbox>
    </Wrapper>
  );
};
