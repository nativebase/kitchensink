import React from "react";
import { HStack, IconButton, Icon } from "native-base";
import { Wrapper } from "../../components";
export const IconButtonVariant = function (props: any) {
  return (
    <Wrapper {...props}>
      <HStack space={4}>
        {["outline", "solid", "ghost"].map((variant: any) => (
          <IconButton
            key={variant}
            variant={variant}
            colorScheme="teal"
            icon={<Icon name={"menu"} />}
          />
        ))}
      </HStack>
    </Wrapper>
  );
};
