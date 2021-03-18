import React from "react";
import { Tag, HStack } from "native-base";
import { Wrapper } from "../../components";

export const TagSize = function (props: any) {
  return (
    <Wrapper {...props}>
      <HStack space={4} alignItems="flex-start">
        {["sm", "md", "lg"].map((size) => (
          <Tag size={size} key={size} variant="solid" colorScheme="green">
            NativeBase
          </Tag>
        ))}
      </HStack>
    </Wrapper>
  );
};
