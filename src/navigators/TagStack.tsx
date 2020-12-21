import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TagCloseButtonExample,
  TagCustom,
  TagLeftIconExample,
  TagRightIconExample,
  TagSize,
  TagUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function TagStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="tagUsage">
      <Stack.Screen
        name="tagUsage"
        component={TagUsage}
        options={{
          headerTitle: "Tag Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="tagSize"
        component={TagSize}
        options={{
          headerTitle: "Tag Size",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="tagLeftIcon"
        component={TagLeftIconExample}
        options={{
          headerTitle: "Tag LeftIcon",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="tagRightIcon"
        component={TagRightIconExample}
        options={{
          headerTitle: "Tag RightIcon",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="tagCloseButton"
        component={TagCloseButtonExample}
        options={{
          headerTitle: "Tag CloseButton",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="tagCustom"
        component={TagCustom}
        options={{
          headerTitle: "Tag Custom",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
