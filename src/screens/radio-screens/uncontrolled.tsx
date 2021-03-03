import React from "react";
import { Radio, Text } from "native-base";
import { Wrapper } from "../../components";

export const RadioUnControlled = function () {
  return (
    <Wrapper>
      <Radio.Group defaultValue="1" name="myRadioGroup">
        <Radio value="1">
          <Text mx={2}>First</Text>
        </Radio>
        <Radio value="2">
          <Text mx={2}>Second</Text>
        </Radio>
        <Radio value="3">
          <Text mx={2}>Third</Text>
        </Radio>
      </Radio.Group>
    </Wrapper>
  );
};
