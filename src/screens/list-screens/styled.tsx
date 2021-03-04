import React from "react";
import { List, Heading, Box } from "native-base";
import { Wrapper } from "../../components";

export const ListStyled = function () {
  return (
    <Wrapper>
      <Box w="50%">
        <Heading fontSize={24}>Styled List</Heading>
        <List.Ordered
          my={2}
          spacing={2}
          start={11}
          _text={{ color: "amber.600" }}
        >
          <List.Item>Ocean's </List.Item>
          <List.Item _text={{ color: "red.200" }}>Ocean's </List.Item>
          <List.Item _text={{ color: "teal.400", fontWeight: "bold" }}>
            Ocean's
          </List.Item>
        </List.Ordered>
      </Box>
    </Wrapper>
  );
};
