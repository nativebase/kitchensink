import React from "react";
import { IconButton, Icon } from "native-base";
import { Wrapper } from "../../components";
export const IconButtonUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <IconButton
        colorScheme="blue"
        variant="outline"
        icon={<Icon name={"search"} />}
      />
    </Wrapper>
  );
};
