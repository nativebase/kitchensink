import React from "react";
import { Tag, Icon } from "native-base";
import { Wrapper } from "../../components";

export const TagWithIconExample = function () {
  return (
    <Wrapper>
      <Tag colorScheme="green" variant="solid" rounded={100}>
        <Icon name={"menu"} type="MaterialIcons" color="white" mr={1} />
        Menu
      </Tag>
    </Wrapper>
  );
};
