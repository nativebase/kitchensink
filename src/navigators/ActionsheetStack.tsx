import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ActionsheetUsage,
  ActionsheetComposition,
  ActionsheetDisableOverlay,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function ActionsheetStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="actionsheetUsage">
      <Stack.Screen
        name="actionsheetUsage"
        component={ActionsheetUsage}
        options={{
          headerTitle: "Actionsheet Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="actionsheetDisableOverlay"
        component={ActionsheetDisableOverlay}
        options={{
          headerTitle: "Actionsheet DisableOverlay",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="actionsheetComposition"
        component={ActionsheetComposition}
        options={{
          headerTitle: "Actionsheet Composition",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
