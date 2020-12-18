import React from "react";
import { HStack, IconButton, Icon } from "native-base";
import { Wrapper } from "../../components";
export const IconButtonSize = function () {
  return (
    <Wrapper>
      <HStack space={4}>
        {["sm", "md", "lg"].map((size: any) => (
          <IconButton
            size={size}
            variant="solid"
            colorScheme="blue"
            icon={<Icon name={"menu"} size={"lg"} />}
          />
        ))}
      </HStack>
    </Wrapper>
  );
};
