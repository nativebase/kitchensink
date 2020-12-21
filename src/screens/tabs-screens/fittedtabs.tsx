import React from "react";
import { Box, Tabs, TabBar, TabViews, Tab, TabView } from "native-base";
import { Wrapper } from "../../components";

export const TabsFitted = function () {
  return (
    <Wrapper>
      <Box width="100%" p={3}>
        <Tabs isFitted>
          <TabBar>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabBar>
          <TabViews>
            <TabView>One</TabView>
            <TabView>Two</TabView>
            <TabView>Three</TabView>
          </TabViews>
        </Tabs>
      </Box>
    </Wrapper>
  );
};
