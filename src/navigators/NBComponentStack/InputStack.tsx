import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  InputAddons,
  InputControlled,
  InputElements,
  InputFocusError,
  InputPassword,
  InputSize,
  InputUsage,
  InputVariant,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function InputStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="inputUsage">
      <Stack.Screen
        name="inputUsage"
        component={InputUsage}
        options={useHeaderOptions("Input Basic", props)}
      />
      <Stack.Screen
        name="inputSize"
        component={InputSize}
        options={useHeaderOptions("Input Sizes", props)}
      />
      <Stack.Screen
        name="inputVariant"
        component={InputVariant}
        options={useHeaderOptions("Input Variants", props)}
      />
      <Stack.Screen
        name="inputAddon"
        component={InputAddons}
        options={useHeaderOptions("Input Addons", props)}
      />
      <Stack.Screen
        name="inputElement"
        component={InputElements}
        options={useHeaderOptions("Input Elements", props)}
      />
      <Stack.Screen
        name="inputPassword"
        component={InputPassword}
        options={useHeaderOptions("Input Password Example", props)}
      />
      <Stack.Screen
        name="inputControlled"
        component={InputControlled}
        options={useHeaderOptions("Value Controlled Input", props)}
      />
      <Stack.Screen
        name="inputFocusError"
        component={InputFocusError}
        options={useHeaderOptions("Input Focus and Error Borders", props)}
      />
    </Stack.Navigator>
  );
}
