import React from "react";
import { Tabs } from "native-base";
import { Wrapper } from "../../components";

export const TabsBarOnly = function () {
  return (
    <Wrapper>
      <Tabs>
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
          <Tabs.Tab>Four</Tabs.Tab>
        </Tabs.Bar>
      </Tabs>
    </Wrapper>
  );
};
