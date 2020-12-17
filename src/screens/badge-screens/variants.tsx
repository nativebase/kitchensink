import React from "react";
import { Badge, HStack } from "native-base";
import { Wrapper } from "../../components";

export const BadgeVariants = function () {
  return (
    <Wrapper>
      <HStack>
        <Badge mx={2} colorScheme="success" variant="solid">
          SOLID
        </Badge>
        <Badge mx={2} colorScheme="success">
          SUBTLE
        </Badge>
        <Badge mx={2} colorScheme="success" variant="outline">
          OUTLINE
        </Badge>
      </HStack>
    </Wrapper>
  );
};
