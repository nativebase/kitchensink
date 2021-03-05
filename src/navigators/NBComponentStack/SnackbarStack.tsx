import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SnackbarHook, SnackbarUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function SnackbarStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="snackbarUsage">
      <Stack.Screen
        name="snackbarUsage"
        component={SnackbarUsage}
        options={useHeaderOptions("Snackbar Basic", props)}
      />
      <Stack.Screen
        name="snackbarHook"
        component={SnackbarHook}
        options={useHeaderOptions("Snackbar Hook", props)}
      />
    </Stack.Navigator>
  );
}
