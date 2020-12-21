import React from "react";
import { Skeleton, Stack } from "native-base";
import { Wrapper } from "../../components";
export const SkeletonUsage = function () {
  return (
    <Wrapper>
      <Stack width="90%">
        <Skeleton my={2} height="20px" />
        <Skeleton my={2} height="20px" />
        <Skeleton my={2} height="20px" />
      </Stack>
    </Wrapper>
  );
};
