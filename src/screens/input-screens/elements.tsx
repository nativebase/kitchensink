import React from "react";

import { Input, Icon } from "native-base";
import { Wrapper } from "../../components";

export const InputElements = (props: any) => {
  return (
    <Wrapper {...props}>
      <Input
        w="90%"
        InputLeftElement={
          <Icon name="phone" fontSize="xl" type="MaterialIcons" m={2} />
        }
        InputRightElement={
          <Icon name="person" fontSize="xl" type="MaterialIcons" m={2} />
        }
        placeholder="Left and Right InputElement"
      />
    </Wrapper>
  );
};
