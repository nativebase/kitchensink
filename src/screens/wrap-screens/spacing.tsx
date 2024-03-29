import React from "react";
import { Wrap, Center } from "native-base";
import { Wrapper } from "../../components";
export const WrapSpacing = function () {
  return (
    <Wrapper>
      <Wrap spacing={10} direction="row">
        <Center w="180px" h="80px" bg="red.200">
          Box 1
        </Center>
        <Center w="180px" h="80px" bg="green.200">
          Box 2
        </Center>
        <Center w="180px" h="80px" bg="tomato">
          Box 3
        </Center>
        <Center w="180px" h="80px" bg="blue.200">
          Box 4
        </Center>
      </Wrap>
    </Wrapper>
  );
};
