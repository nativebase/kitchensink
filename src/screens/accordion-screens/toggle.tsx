import React from "react";
import { Accordion, Box } from "native-base";
import { Wrapper } from "../../components";
export const AccordionToggle = (props: any) => {
  return (
    <Wrapper {...props}>
      <Box m={3}>
        <Accordion allowToggle defaultIndex={[2]}>
          <Accordion.Item>
            <Accordion.Summary>
              Section 1 title
              <Accordion.Icon />
            </Accordion.Summary>
            <Accordion.Details>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Details>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Summary>
              Section 2 title
              <Accordion.Icon />
            </Accordion.Summary>
            <Accordion.Details>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Details>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Summary>
              Section 3 title
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
