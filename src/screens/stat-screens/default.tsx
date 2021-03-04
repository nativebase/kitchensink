import React from "react";
import { Stat, Heading, Box } from "native-base";
import { Wrapper } from "../../components";

export const StatDefault = function () {
  return (
    <Wrapper>
      <Box>
        <Heading>Basic Stat Usage</Heading>
        <Stat mt={6}>
          <Stat.Label>Collected Fees</Stat.Label>
          <Stat.Number>£0.00</Stat.Number>
          <Stat.HelpText>Feb 12 - Feb 28</Stat.HelpText>
        </Stat>
      </Box>
    </Wrapper>
  );
};
