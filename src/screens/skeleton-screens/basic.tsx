import React from "react";
import { Skeleton, Stack } from "native-base";
import { Wrapper } from "../../components";
export const SkeletonUsage = function () {
  return (
    <Wrapper>
      <Stack width="90%">
        <Skeleton variant="text" height={6} />
        <Skeleton my={2} height={6} variant="rect" />
        <Skeleton my={2} height={6} variant="circle" size={20} />
      </Stack>
    </Wrapper>
  );
};
