import React from "react";
import { Tabs, TabBar, Tab } from "native-base";
import { Wrapper } from "../../components";

export const TabsBarOnly = function () {
  return (
    <Wrapper>
      <Tabs>
        <TabBar>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
          <Tab>Four</Tab>
        </TabBar>
      </Tabs>
    </Wrapper>
  );
};
