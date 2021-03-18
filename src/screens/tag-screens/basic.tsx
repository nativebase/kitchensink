import React from "react";
import { Tag } from "native-base";
import { Wrapper } from "../../components";

export const TagUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Tag colorScheme="green">NativeBase</Tag>
    </Wrapper>
  );
};
