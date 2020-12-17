import React from "react";
import { Button, HStack, Icon } from "native-base";
import { Wrapper } from "../../components";

export const ButtonIcon = function () {
  return (
    <Wrapper>
      <HStack space={2}>
        <Button
          leftIcon={<Icon name="menu" size={6} type="MaterialIcons" />}
          colorScheme="indigo"
        >
          Menu
        </Button>
        <Button
          isDisabled
          rightIcon={<Icon name="menu" size={6} type="MaterialIcons" />}
          colorScheme="cyan"
        >
          Menu
        </Button>
      </HStack>
    </Wrapper>
  );
};
