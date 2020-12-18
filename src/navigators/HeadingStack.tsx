import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HeadingComposition,
  HeadingOverriden,
  HeadingSize,
  HeadingTruncate,
  HeadingUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function HeadingStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="headingUsage">
      <Stack.Screen
        name="headingUsage"
        component={HeadingUsage}
        options={{
          headerTitle: "Heading Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="headingSize"
        component={HeadingSize}
        options={{
          headerTitle: "Heading Sizes",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="headingTruncate"
        component={HeadingTruncate}
        options={{
          headerTitle: "Heading Truncate",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="headingOverriden"
        component={HeadingOverriden}
        options={{
          headerTitle: "Heading Overriden Style",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="headingComposition"
        component={HeadingComposition}
        options={{
          headerTitle: "Heading Composition",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
