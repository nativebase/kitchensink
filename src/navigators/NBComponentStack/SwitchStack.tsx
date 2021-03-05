import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SwitchBgColor,
  SwitchSize,
  SwitchUsage,
  SwitchAccessibility,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function SwitchStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="switchUsage">
      <Stack.Screen
        name="switchUsage"
        component={SwitchUsage}
        options={useHeaderOptions("Switch Basic", props)}
      />
      <Stack.Screen
        name="switchSize"
        component={SwitchSize}
        options={useHeaderOptions("Switch Sizes", props)}
      />
      <Stack.Screen
        name="switchBgColor"
        component={SwitchBgColor}
        options={useHeaderOptions("Switch BgColor", props)}
      />
      <Stack.Screen
        name="switchAccessibility"
        component={SwitchAccessibility}
        options={useHeaderOptions("Switch Accessibility", props)}
      />
    </Stack.Navigator>
  );
}
