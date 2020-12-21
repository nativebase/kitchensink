import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ToastOffset, ToastPosition, ToastUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function ToastStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="toastUsage">
      <Stack.Screen
        name="toastUsage"
        component={ToastUsage}
        options={{
          headerTitle: "Toast Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="toastPosition"
        component={ToastPosition}
        options={{
          headerTitle: "Toast Position",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="toastOffset"
        component={ToastOffset}
        options={{
          headerTitle: "Toast Offset",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
