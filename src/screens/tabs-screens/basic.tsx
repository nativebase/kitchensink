import React from "react";
import { Tabs, TabBar, TabViews, Tab, TabView } from "native-base";
import { Wrapper } from "../../components";

export const TabsUsage = function () {
  return (
    <Wrapper>
      <Tabs>
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
    </Wrapper>
  );
};
