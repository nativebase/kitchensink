import React from "react";
import { Box, Heading, Divider, Flex } from "native-base";
import { Wrapper } from "../../components";
export const BoxComposite = () => {
  return (
    <Wrapper>
      <Box width="100%" bg="blue.50" p={4} color="blue.700">
        <Heading size="xl">Title</Heading>
        <Divider mb={4} borderColor="teal.400" />
        This can be a paragraph of a Story about a wise fox.
        <Flex direction="row">
          <Box width="50%" bg="blue.50" p={4} color="blue.700">
            <Heading size="lg">Sub Title</Heading>
            <Divider mb={4} borderColor="teal.400" />
            This can be a paragraph of a Story about a wise fox.
          </Box>
          <Box width="50%" bg="blue.50" p={4} color="blue.700">
            <Heading size="lg">Sub Title</Heading>
            <Divider mb={4} borderColor="teal.400" />
            This can be a paragraph of a Story about a wise fox.
          </Box>
        </Flex>
      </Box>
    </Wrapper>
  );
};
