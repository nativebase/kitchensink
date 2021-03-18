import React from "react";
import { Column, Box } from "native-base";
import { Wrapper } from "../../components";

export const ColumnUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Column height={100}>
        <Box w="100" flexGrow={1} bg="green.500" />
        <Box bg="blue.300" flexGrow={2} w="100" />
        <Box flexGrow={1} w="100" bg="tomato" />
      </Column>
    </Wrapper>
  );
};
