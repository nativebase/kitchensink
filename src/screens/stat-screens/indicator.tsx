import React from "react";
import { Stat, StatArrow, StatGroup, Heading, Box } from "native-base";
import { Wrapper } from "../../components";

export const StatIndicator = function () {
  return (
    <Wrapper>
      <Box>
        <Heading>Stat with Indicator</Heading>
        <StatGroup mt={6} color="indigo.500">
          <Stat>
            <Stat.Label>Sent</Stat.Label>
            <Stat.Number>3,670</Stat.Number>
            <Stat.HelpText>
              <StatArrow type="increase" />
              23.36%
            </Stat.HelpText>
          </Stat>
          <Stat>
            <Stat.Label>Clicked</Stat.Label>
            <Stat.Number>45</Stat.Number>
            <Stat.HelpText>
              <StatArrow type="increase" />
              9.05%
            </Stat.HelpText>
          </Stat>
        </StatGroup>
      </Box>
    </Wrapper>
  );
};
