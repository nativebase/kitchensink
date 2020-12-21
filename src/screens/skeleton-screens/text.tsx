import React from "react";
import { SkeletonText } from "native-base";
import { Wrapper } from "../../components";
export const SkeletonTextExammple = function () {
  return (
    <Wrapper>
      <SkeletonText noOfLines={5} />
    </Wrapper>
  );
};
