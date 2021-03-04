import React from "react";
import { Button, HStack, Icon } from "native-base";
import { Wrapper } from "../../components";

export const ButtonIcon = function () {
  return (
    <Wrapper>
      <HStack space={2}>
        <Button
          startIcon={<Icon name="menu" size={6} type="MaterialIcons" />}
          colorScheme="blue"
        >
          Menu
        </Button>
        <Button
          isDisabled
          endIcon={<Icon name="menu" size={6} type="MaterialIcons" />}
          colorScheme="cyan"
        >
          Menu
        </Button>
      </HStack>
    </Wrapper>
  );
};
