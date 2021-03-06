import React from "react";
import { List, Heading, Box } from "native-base";
import { Wrapper } from "../../components";

export const ListOrdered = function () {
  return (
    <Wrapper>
      <Box w="50%">
        <Heading fontSize={24}>Ordered List</Heading>
        <List.Ordered my={2} spacing={2}>
          <List.Item>Inferno</List.Item>
          <List.Item>Mirage</List.Item>
          <List.Item>Dust 2</List.Item>
          <List.Item>Nuke</List.Item>
        </List.Ordered>
      </Box>
    </Wrapper>
  );
};
