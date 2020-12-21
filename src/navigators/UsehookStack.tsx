import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  UseBreakpointValueUsage,
  UseClipboardUsage,
  UseDiscloseUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function UseHookStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="useBreakpointValue"
        component={UseBreakpointValueUsage}
        options={{
          headerTitle: "useBreakpointValue Hook Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="useClipboard"
        component={UseClipboardUsage}
        options={{
          headerTitle: "useClipboard Hook Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="useDisclose"
        component={UseDiscloseUsage}
        options={{
          headerTitle: "useDisclose Hook Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
