import React from "react";
import { Button, HStack } from "native-base";
import { Wrapper } from "../../components";

export const ButtonVariant = function () {
  return (
    <Wrapper>
      <HStack space={2}>
        {["solid", "outline", "ghost", "link", "unstyled"].map(
          (variant: any) => (
            <Button variant={variant} colorScheme="teal">
              Button
            </Button>
          )
        )}
      </HStack>
    </Wrapper>
  );
};
