import React from "react";
import { Text } from "native-base";
import { Wrapper } from "../../components";

export const TextNested = function () {
  return (
    <Wrapper>
      <Text>
        This is the <Text bold>nested</Text> example.
      </Text>
    </Wrapper>
  );
};
