import React from "react";
import { Button, HStack } from "native-base";
import { Wrapper } from "../../components";

export const ButtonVariant = function (props: any) {
  return (
    <Wrapper {...props}>
      <HStack space={2}>
        {["solid", "outline", "ghost", "link", "unstyled"].map(
          (variant: any) => (
            <Button variant={variant} colorScheme="teal" key={variant}>
              Button
            </Button>
          )
        )}
      </HStack>
    </Wrapper>
  );
};
