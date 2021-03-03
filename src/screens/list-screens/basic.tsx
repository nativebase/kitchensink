import React from "react";
import { List, Heading, Box } from "native-base";
import { Wrapper } from "../../components";

export const ListUsage = function () {
  return (
    <Wrapper>
      <Box height="50%">
        <Heading fontSize={32} color="indigo.500">
          Unordered List
        </Heading>
        <List.Item my={2} fontSize={24} spacing={4} color="red.200">
          <List.Item>Inferno</List.Item>
          <List.Item>Mirage</List.Item>
          <List.Item>Dust 2</List.Item>
          <List.Item>Nuke</List.Item>
        </List.Item>
        <Heading fontSize={32} color="indigo.500">
          Ordered List
        </Heading>
        <List.Item mt={2} fontSize={24} spacing={4} color="red.200">
          <List.Item>Inferno</List.Item>
          <List.Item>Mirage</List.Item>
          <List.Item>Dust 2</List.Item>
          <List.Item>Nuke</List.Item>
        </List.Item>
      </Box>
    </Wrapper>
  );
};
