import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SnackbarHook, SnackbarUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function SnackbarStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="snackbarUsage">
      <Stack.Screen
        name="snackbarUsage"
        component={SnackbarUsage}
        options={{
          headerTitle: "Snackbar Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="snackbarHook"
        component={SnackbarHook}
        options={{
          headerTitle: "Snackbar Hook",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
