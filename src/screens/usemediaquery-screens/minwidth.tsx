import React from "react";
import { Text, useMediaQuery } from "native-base";
import { Wrapper } from "../../components";

export const UseMediaQueryMinWidth = function () {
  const [isLargerThan512] = useMediaQuery({ minWidth: 512 });
  return (
    <Wrapper>
      <Text>
        {isLargerThan512 ? "Width larger than 512" : "Width smaller than 512"}
      </Text>
    </Wrapper>
  );
};
