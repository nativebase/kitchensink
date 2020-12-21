import React from "react";
import { Radio, Text, RadioGroup } from "native-base";
import { Wrapper } from "../../components";

export const RadioDisabled = function () {
  return (
    <Wrapper>
      <RadioGroup defaultValue="1" name="exampleGroup">
        <Radio value="1" isDisabled>
          <Text mx={2}>First</Text>
        </Radio>
        <Radio value="2">
          <Text mx={2}>Second</Text>
        </Radio>
        <Radio value="3">
          <Text mx={2}>Third</Text>
        </Radio>
      </RadioGroup>
    </Wrapper>
  );
};
