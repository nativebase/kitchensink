import React from "react";
import { Checkbox, Text } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxUncontrolled = function UnControlledCheckbox() {
  return (
    <Wrapper>
      <Checkbox.Group onChange={console.log}>
        <Checkbox value="one">
          <Text>Hello world</Text>
        </Checkbox>
        <Checkbox value="two">
          <Text>Hello world</Text>
        </Checkbox>
      </Checkbox.Group>
    </Wrapper>
  );
};
