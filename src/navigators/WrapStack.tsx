import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  WrapAlignmentAlign,
  WrapAlignmentJustify,
  WrapSpacing,
  WrapUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function WrapStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="wrapUsage"
        component={WrapUsage}
        options={{
          headerTitle: "Wrap Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="wrapSpacing"
        component={WrapSpacing}
        options={{
          headerTitle: "Wrap Spacing",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="wrapAlignmentAlign"
        component={WrapAlignmentAlign}
        options={{
          headerTitle: "Wrap Alignment Align",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="wrapAlignmentJustify"
        component={WrapAlignmentJustify}
        options={{
          headerTitle: "Wrap Alignment Justify",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}