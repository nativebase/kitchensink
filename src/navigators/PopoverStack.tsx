import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PopoverRef, PopoverSize, PopoverUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function PopoverStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="popoverUsage">
      <Stack.Screen
        name="popoverUsage"
        component={PopoverUsage}
        options={{
          headerTitle: "Popover Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="popoverSize"
        component={PopoverSize}
        options={{
          headerTitle: "Popover Size",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="popoverRef"
        component={PopoverRef}
        options={{
          headerTitle: "Popover Focus on Open",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
