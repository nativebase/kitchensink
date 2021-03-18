import React from "react";
import { Radio, Text } from "native-base";
import type { IRadioValue } from "native-base";
import { Wrapper } from "../../components";

export const RadioControlled = function ControlledRadio(props: any) {
  const [value, setValue] = React.useState<IRadioValue>("one");

  return (
    <Wrapper {...props}>
      <Radio.Group
        name="myRadioGroup"
        value={value}
        onChange={(nextValue: any) => {
          setValue(nextValue);
        }}
      >
        <Radio value="one">
          <Text>One</Text>
        </Radio>
        <Radio value="two">
          <Text>Two</Text>
        </Radio>
      </Radio.Group>
    </Wrapper>
  );
};
