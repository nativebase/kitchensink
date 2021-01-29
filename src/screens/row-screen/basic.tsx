import React from "react";
import { Row, Box } from "native-base";
import { Wrapper } from "../../components";

export const RowUsage = function () {
  return (
    <Wrapper>
      <Row width={400}>
        <Box h="100px"  w={400/3} bg="green.500" />
        <Box bg="blue.300" w={400/3}  h="100px" />
        <Box  h="100px" w={400/3} bg="tomato" />
      </Row>
    </Wrapper>
  );
};
