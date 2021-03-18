import React from "react";
import { Button } from "native-base";
import { Wrapper } from "../../components";

export const ButtonComposition = function (props: any) {
  return (
    <Wrapper {...props}>
      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green.500"
      >
        Button
      </Button>
    </Wrapper>
  );
};
