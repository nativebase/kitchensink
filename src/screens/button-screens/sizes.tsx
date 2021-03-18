import React from "react";
import { Button, HStack } from "native-base";
import { Wrapper } from "../../components";

export const ButtonSize = function (props: any) {
  return (
    <Wrapper {...props}>
      <HStack space={2}>
        {["xs", "sm", "md", "lg"].map((size: any) => (
          <Button key={size} size={size} colorScheme="teal">
            Button
          </Button>
        ))}
      </HStack>
    </Wrapper>
  );
};
