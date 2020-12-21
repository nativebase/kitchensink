import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Heading,
  Box,
} from "native-base";
import { Wrapper } from "../../components";

export const StatIndicator = function () {
  return (
    <Wrapper>
      <Box>
        <Heading>Stat with Indicator</Heading>
        <StatGroup mt={6} color="indigo.500">
          <Stat>
            <StatLabel>Sent</StatLabel>
            <StatNumber>3,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Clicked</StatLabel>
            <StatNumber>45</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              9.05%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Box>
    </Wrapper>
  );
};
