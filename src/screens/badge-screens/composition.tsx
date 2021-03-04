import React from "react";
import { Badge, HStack, Button } from "native-base";
import { Wrapper } from "../../components";

export const BadgeComposition = function () {
  return (
    <Wrapper>
      <HStack>
        <Button colorScheme="teal">
          Notifications
          <Badge ml={2}>10</Badge>
        </Button>
      </HStack>
    </Wrapper>
  );
};
