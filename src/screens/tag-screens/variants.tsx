import React from "react";
import { Tag, HStack } from "native-base";
import { Wrapper } from "../../components";

export const TagVariantsExample = function (props: any) {
  return (
    <Wrapper {...props}>
      <HStack space={4} alignItems="flex-start">
        {["solid", "subtle", "outline"].map((variant: any) => (
          <Tag key={variant} variant={variant} colorScheme="green">
            NativeBase
          </Tag>
        ))}
      </HStack>
    </Wrapper>
  );
};
