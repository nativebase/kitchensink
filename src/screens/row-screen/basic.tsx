import React from "react";
import { Row, Box } from "native-base";
import { Wrapper } from "../../components";

export const RowUsage = function () {
  return (
    <Wrapper>
      <Row width={400}>
        <Box h="100px" flexGrow={1} bg="green.500" />
        <Box bg="blue.300" flexGrow={2} h="100px" />
        <Box flexGrow={1} h="100px" bg="tomato" />
      </Row>
    </Wrapper>
  );
};
