import React from "react";
import { Badge, HStack } from "native-base";
import { Wrapper } from "../../components";

export const BadgeColor = function (props: any) {
  return (
    <Wrapper {...props}>
      <HStack>
        <Badge m={2} colorScheme="success">
          SUCCESS
        </Badge>
        <Badge m={2} colorScheme="danger">
          DANGER
        </Badge>
        <Badge m={2} colorScheme="gray">
          GRAY
        </Badge>
        <Badge m={2} colorScheme="dark">
          DARK
        </Badge>
      </HStack>
    </Wrapper>
  );
};
