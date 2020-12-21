import React from "react";
import { Skeleton, Stack, Text, Heading } from "native-base";
import { Wrapper } from "../../components";
export const SkeletonWrapper = function () {
  return (
    <Wrapper>
      <Stack width="90%">
        <Skeleton>
          <Heading>contents wrapped</Heading>
          <Text>won't be visible</Text>
        </Skeleton>
      </Stack>
    </Wrapper>
  );
};
