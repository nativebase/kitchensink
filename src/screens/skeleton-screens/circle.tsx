import React from "react";
import { SkeletonCircle } from "native-base";
import { Wrapper } from "../../components";
export const SkeletonCircleExample = function () {
  return (
    <Wrapper>
      <SkeletonCircle size={40} />
    </Wrapper>
  );
};
