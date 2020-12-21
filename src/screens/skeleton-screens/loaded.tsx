import React from "react";
import { Skeleton, Text } from "native-base";
import { Wrapper } from "../../components";
export const SkeletonLoaded = function () {
  return (
    <Wrapper>
      <Skeleton isLoaded>
        <Text>NativeBase is cool</Text>
      </Skeleton>
    </Wrapper>
  );
};
