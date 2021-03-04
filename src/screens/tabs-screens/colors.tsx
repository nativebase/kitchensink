import React from "react";
import { VStack, Tabs } from "native-base";
import { Wrapper } from "../../components";

export const TabsColor = function () {
  return (
    <Wrapper>
      <VStack width="100%" p={3} space={7}>
        <Tabs colorScheme="danger">
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
        <Tabs colorScheme="warning">
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
        <Tabs colorScheme="teal">
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
        <Tabs colorScheme="orange">
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
        <Tabs colorScheme="info">
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
      </VStack>
    </Wrapper>
  );
};
