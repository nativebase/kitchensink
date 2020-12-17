import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CloseButtonSize, CloseButtonUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function CloseButtonStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="closeButtonUsage">
      <Stack.Screen
        name="closeButtonUsage"
        component={CloseButtonUsage}
        options={{
          headerTitle: "CloseButton Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="closeButtonSize"
        component={CloseButtonSize}
        options={{
          headerTitle: "CloseButton Size",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
