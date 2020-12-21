import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ProgressBgColor,
  ProgressColor,
  ProgressComposition,
  ProgressRounded,
  ProgressUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function ProgressStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="progressUsage">
      <Stack.Screen
        name="progressUsage"
        component={ProgressUsage}
        options={{
          headerTitle: "Progress Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="progressColor"
        component={ProgressColor}
        options={{
          headerTitle: "Progress Color",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="progressRounded"
        component={ProgressRounded}
        options={{
          headerTitle: "Progress Rounded",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="progressBgColor"
        component={ProgressBgColor}
        options={{
          headerTitle: "Progress Custom BgColor",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="progressComposition"
        component={ProgressComposition}
        options={{
          headerTitle: "Progress Composition",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
