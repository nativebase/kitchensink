import React from "react";
import { List, Heading, Box } from "native-base";
import { Wrapper } from "../../components";

export const ListUnordered = function (props: any) {
  return (
    <Wrapper {...props}>
      <Box w="50%">
        <Heading fontSize={24}>Unordered List</Heading>
        <List.Unordered my={2} spacing={2}>
          <List.Item>Inferno</List.Item>
          <List.Item>Mirage</List.Item>
          <List.Item>Dust 2</List.Item>
          <List.Item>Nuke</List.Item>
        </List.Unordered>
      </Box>
    </Wrapper>
  );
};
