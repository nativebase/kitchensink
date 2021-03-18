import React from "react";
import { Radio, Text } from "native-base";
import { Wrapper } from "../../components";

export const RadioInvalid = function (props: any) {
  return (
    <Wrapper {...props}>
      <Radio.Group name="exampleGroup">
        <Radio value="test" isInvalid>
          <Text mx={2}>Invalid Radio</Text>
        </Radio>
      </Radio.Group>
    </Wrapper>
  );
};
