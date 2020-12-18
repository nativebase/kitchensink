import React from "react";
import { IconButton, Icon } from "native-base";
import { Wrapper } from "../../components";
export const IconButtonUsage = function () {
  return (
    <Wrapper>
      <IconButton
        colorScheme="blue"
        variant="outline"
        icon={<Icon name={"search"} size={"lg"} />}
      />
    </Wrapper>
  );
};
