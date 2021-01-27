import React from "react";
import { Button } from "native-base";
import { Wrapper } from "../../components";

export const ButtonComposition = function () {
  return (
    <Wrapper>
      <Button
        size="md"
        width="200px"
        border="2px"
        borderColor="green.500"
      >
        Button
      </Button>
    </Wrapper>
  );
};
