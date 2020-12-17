import React from "react";
import { Checkbox, CheckboxGroup, Text } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxUncontrolled = function UnControlledCheckbox() {
  return (
    <Wrapper>
      <CheckboxGroup onChange={console.log}>
        <Checkbox value="one">
          <Text>Hello world</Text>
        </Checkbox>
        <Checkbox value="two">
          <Text>Hello world</Text>
        </Checkbox>
      </CheckboxGroup>
    </Wrapper>
  );
};
