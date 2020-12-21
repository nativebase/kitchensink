import React from "react";
import { VStack, Tabs, TabBar, TabViews, Tab, TabView } from "native-base";
import { Wrapper } from "../../components";

export const TabsAlignment = function () {
  return (
    <Wrapper>
      <VStack width="100%" p={3} space={7}>
        <Tabs align="start">
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
        <Tabs align="center">
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
        <Tabs align="end">
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
