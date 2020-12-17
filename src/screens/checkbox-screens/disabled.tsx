import React from "react";
import { Checkbox, HStack, Text } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxDisabled = function () {
  return (
    <Wrapper>
      <HStack>
        <Checkbox isDisabled value="one">
          <Text m={2}>Checkbox</Text>
        </Checkbox>
        <Checkbox isDisabled defaultIsChecked value="two">
          <Text m={2}>Checkbox</Text>
        </Checkbox>
      </HStack>
    </Wrapper>
  );
};
