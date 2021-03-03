import React from "react";
import { Accordion, Box } from "native-base";
import { Wrapper } from "../../components";
export const AccordionExpandedStyle = () => {
  return (
    <Wrapper>
      <Box m={3}>
        <Accordion allowMultiple>
          <Accordion.Item>
            <Accordion.Summary _expanded={{ backgroundColor: "orange.300" }}>
              <Box>Click me to see a different style</Box>
              <Accordion.Icon />
            </Accordion.Summary>
            <Accordion.Details>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Details>
          </Accordion.Item>
          <Accordion.Item id={9} isDisabled>
            <Accordion.Summary _disabled={{ backgroundColor: "gray.300" }}>
              <Box>I'm Disabled 😢</Box>
              <Accordion.Icon />
            </Accordion.Summary>
            <Accordion.Details>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Details>
          </Accordion.Item>
        </Accordion>
      </Box>
    </Wrapper>
  );
};
