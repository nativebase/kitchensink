import React from "react";
import { VStack, Tabs, TabBar, TabViews, Tab, TabView } from "native-base";
import { Wrapper } from "../../components";

export const TabsSize = function () {
  return (
    <Wrapper>
      <VStack width="100%" p={3} space={7}>
        {/* Small Tabs */}
        <Tabs size="sm">
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
        {/* Medium Tabs (default) */}
        <Tabs size="md">
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
        {/* Large Tabs (default) */}
        <Tabs size="lg">
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
      </VStack>
    </Wrapper>
  );
};
