import React from "react";
import { Tag, HStack } from "native-base";
import { Wrapper } from "../../components";

export const TagLeftIconExample = function () {
  return (
    <Wrapper>
      <HStack space={4} alignItems="flex-start">
        {["sm", "md", "lg"].map((size) => (
          <Tag
            key={size}
            colorScheme="red"
            variant="solid"
            rounded={100}
            size={size}
          >
            Menu
          </Tag>
        ))}
      </HStack>
    </Wrapper>
  );
};
