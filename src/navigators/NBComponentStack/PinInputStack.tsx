import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  PinInputDefaultValue,
  PinInputFormControlled,
  PinInputManageFocus,
  PinInputPlaceholder,
  PinInputSize,
  PinInputUsage,
  PinInputVariant,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function PinInputStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="pinInputUsage">
      <Stack.Screen
        name="pinInputUsage"
        component={PinInputUsage}
        options={useHeaderOptions("PinInput Basic", props)}
      />
      <Stack.Screen
        name="pinInputSize"
        component={PinInputSize}
        options={useHeaderOptions("PinInput Size", props)}
      />
      <Stack.Screen
        name="pinInputDefaultValue"
        component={PinInputDefaultValue}
        options={useHeaderOptions("PinInput DefaultValue", props)}
      />
      <Stack.Screen
        name="pinInputPlaceholder"
        component={PinInputPlaceholder}
        options={useHeaderOptions("PinInput Placeholder", props)}
      />
      <Stack.Screen
        name="pinInputManageFocus"
        component={PinInputManageFocus}
        options={useHeaderOptions("PinInput Manage Focus", props)}
      />
      <Stack.Screen
        name="pinInputVariant"
        component={PinInputVariant}
        options={useHeaderOptions("PinInput Variants", props)}
      />
      <Stack.Screen
        name="pinInputFormControlled"
        component={PinInputFormControlled}
        options={useHeaderOptions("PinInput FormControlled", props)}
      />
    </Stack.Navigator>
  );
}
