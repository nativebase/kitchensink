import React from "react";
import { Radio, RadioGroup, Text } from "native-base";
import type { IRadioValue } from "native-base";
import { Wrapper } from "../../components";

export const RadioControlled = function ControlledRadio() {
  const [value, setValue] = React.useState<IRadioValue>("one");

  return (
    <Wrapper>
      <RadioGroup
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
      </RadioGroup>
    </Wrapper>
  );
};
