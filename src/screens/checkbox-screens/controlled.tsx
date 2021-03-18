import React from "react";
import { Checkbox, Text } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxControlled = function ControlledCheckbox(props: any) {
  const [groupValues, setGroupValues] = React.useState<Array<string | number>>(
    []
  );

  return (
    <Wrapper {...props}>
      <Checkbox.Group onChange={setGroupValues} value={groupValues}>
        <Checkbox value="one">
          <Text>One</Text>
        </Checkbox>
        <Checkbox value="two">
          <Text>Two</Text>
        </Checkbox>
      </Checkbox.Group>
    </Wrapper>
  );
};
