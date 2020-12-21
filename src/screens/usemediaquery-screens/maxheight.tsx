import React from "react";
import { Text, useMediaQuery } from "native-base";
import { Wrapper } from "../../components";

export const UseMediaQueryMaxHeight = function () {
  const [isSmaller] = useMediaQuery({ maxHeight: 512 });
  return (
    <Wrapper>
      <Text>
        {isSmaller ? "Height smaller than 512" : "Height larger than 512"}
      </Text>
    </Wrapper>
  );
};
