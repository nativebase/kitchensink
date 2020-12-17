import React from "react";
import { Button, ButtonGroup } from "native-base";
import { Wrapper } from "../../components";

export const ButtonGroupExample = function () {
  return (
    <Wrapper>
      <ButtonGroup variant="solid" spacing={6}>
        <Button colorScheme="blue">Save</Button>
        <Button colorScheme="red">Cancel</Button>
      </ButtonGroup>
    </Wrapper>
  );
};
