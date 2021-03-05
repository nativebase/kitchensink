import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SpinnerColor,
  SpinnerSize,
  SpinnerUsage,
  SpinnerDuration,
  SpinnerVariant,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function SpinnerStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="spinnerUsage">
      <Stack.Screen
        name="spinnerUsage"
        component={SpinnerUsage}
        options={useHeaderOptions("Spinner Basic", props)}
      />
      <Stack.Screen
        name="spinnerColor"
        component={SpinnerColor}
        options={useHeaderOptions("Spinner Color", props)}
      />
      <Stack.Screen
        name="spinnerSize"
        component={SpinnerSize}
        options={useHeaderOptions("Spinner Size", props)}
      />
      <Stack.Screen
        name="spinnerDuration"
        component={SpinnerDuration}
        options={useHeaderOptions("Spinner Duration", props)}
      />
      <Stack.Screen
        name="spinnerVariant"
        component={SpinnerVariant}
        options={useHeaderOptions("Spinner Variant", props)}
      />
    </Stack.Navigator>
  );
}
