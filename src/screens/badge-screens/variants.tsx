import React from "react";
import { Badge, VStack, HStack } from "native-base";
import { Wrapper } from "../../components";

export const BadgeVariants = function (props: any) {
  return (
    <Wrapper {...props}>
      <VStack>
        {["solid", "outline", "subtle"].map((key: any) => (
          <HStack key={key}>
            <Badge m={2}>Default</Badge>
            <Badge m={2} colorScheme="success" variant={key}>
              SUCCESS
            </Badge>
            <Badge m={2} colorScheme="danger" variant={key}>
              DANGER
            </Badge>
            <Badge m={2} colorScheme="info" variant={key}>
              INFO
            </Badge>
          </HStack>
        ))}
      </VStack>
    </Wrapper>
  );
};
