import React from "react";
import { Icon, Path } from "native-base";
import { Wrapper } from "../../components";
export const IconCustom = function () {
  return (
    <Wrapper>
      <Icon viewBox="0 0 200 200" color="blue.300" size={12} strokeWidth="10">
        <Path
          fill="blue.300"
          stroke="red.300"
          strokeWidth="10"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
      </Icon>
    </Wrapper>
  );
};
