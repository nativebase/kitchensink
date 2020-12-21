import React from "react";
import { Skeleton, VStack } from "native-base";
import { Wrapper } from "../../components";
export const SkeletonColor = function () {
  return (
    <Wrapper>
      <VStack space={5} width="90%">
        <Skeleton startColor="pink.600" endColor="purple.400" height="20px" />
        <Skeleton startColor="#0dead0" endColor="#0face0" height="20px" />
        <Skeleton
          startColor="warning.200"
          endColor="danger.200"
          height="20px"
        />
      </VStack>
    </Wrapper>
  );
};
