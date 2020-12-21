import React from "react";
import { Radio, RadioGroup, Text } from "native-base";
import { Wrapper } from "../../components";

export const RadioInvalid = function () {
  return (
    <Wrapper>
      <RadioGroup name="exampleGroup">
        <Radio value="test" isInvalid>
          <Text mx={2}>Invalid Radio</Text>
        </Radio>
      </RadioGroup>
    </Wrapper>
  );
};
