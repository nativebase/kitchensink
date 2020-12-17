import React from "react";
import { Checkbox, CheckboxGroup, Text } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxControlled = function ControlledCheckbox() {
  const [groupValues, setGroupValues] = React.useState<Array<string | number>>(
    []
  );

  return (
    <Wrapper>
      <CheckboxGroup onChange={setGroupValues} value={groupValues}>
        <Checkbox value="one">
          <Text>One</Text>
        </Checkbox>
        <Checkbox value="two">
          <Text>Two</Text>
        </Checkbox>
      </CheckboxGroup>
    </Wrapper>
  );
};
