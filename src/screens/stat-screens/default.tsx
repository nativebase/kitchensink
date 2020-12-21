import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Box,
} from "native-base";
import { Wrapper } from "../../components";

export const StatDefault = function () {
  return (
    <Wrapper>
      <Box>
        <Heading>Basic Stat Usage</Heading>
        <Stat mt={6}>
          <StatLabel>Collected Fees</StatLabel>
          <StatNumber>£0.00</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>
      </Box>
    </Wrapper>
  );
};
