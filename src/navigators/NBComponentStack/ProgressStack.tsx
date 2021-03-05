import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ProgressBgColor,
  ProgressColor,
  ProgressComposition,
  ProgressRounded,
  ProgressUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ProgressStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="progressUsage">
      <Stack.Screen
        name="progressUsage"
        component={ProgressUsage}
        options={useHeaderOptions("Progress Basic", props)}
      />
      <Stack.Screen
        name="progressColor"
        component={ProgressColor}
        options={useHeaderOptions("Progress Color", props)}
      />
      <Stack.Screen
        name="progressRounded"
        component={ProgressRounded}
        options={useHeaderOptions("Progress Rounded", props)}
      />
      <Stack.Screen
        name="progressBgColor"
        component={ProgressBgColor}
        options={useHeaderOptions("Progress Custom BgColor", props)}
      />
      <Stack.Screen
        name="progressComposition"
        component={ProgressComposition}
        options={useHeaderOptions("Progress Composition", props)}
      />
    </Stack.Navigator>
  );
}
