import React from "react";
import { Box, Tabs } from "native-base";
import { Wrapper } from "../../components";

export const TabsFitted = function () {
  return (
    <Wrapper>
      <Box width="100%" p={3}>
        <Tabs isFitted>
          <Tabs.Bar>
            <Tabs.Tab>One</Tabs.Tab>
            <Tabs.Tab>Two</Tabs.Tab>
            <Tabs.Tab>Three</Tabs.Tab>
          </Tabs.Bar>
          <Tabs.Views>
            <Tabs.View>One</Tabs.View>
            <Tabs.View>Two</Tabs.View>
            <Tabs.View>Three</Tabs.View>
          </Tabs.Views>
        </Tabs>
      </Box>
    </Wrapper>
  );
};
