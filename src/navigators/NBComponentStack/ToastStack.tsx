import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ToastOffset, ToastPosition, ToastUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ToastStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="toastUsage">
      <Stack.Screen
        name="toastUsage"
        component={ToastUsage}
        options={useHeaderOptions("Toast Basic", props)}
      />
      <Stack.Screen
        name="toastPosition"
        component={ToastPosition}
        options={useHeaderOptions("Toast Position", props)}
      />
      <Stack.Screen
        name="toastOffset"
        component={ToastOffset}
        options={useHeaderOptions("Toast Offset", props)}
      />
    </Stack.Navigator>
  );
}
