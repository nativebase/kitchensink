import React from "react";
import { Tag, HStack } from "native-base";
import { Wrapper } from "../../components";

export const TagCloseButtonExample = function () {
  return (
    <Wrapper>
      <HStack space={2} alignItems="flex-start">
        {["sm", "md", "lg"].map((size) => (
          <Tag
            key={size}
            colorScheme="green"
            variant="solid"
            bg="red.200"
            rounded={100}
            size={size}
          >
            NativeBase
          </Tag>
        ))}
      </HStack>
    </Wrapper>
  );
};
