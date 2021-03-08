import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CheckboxColor,
  CheckboxControlled,
  CheckboxDisabled,
  CheckboxFormControlled,
  CheckboxGroupExample,
  CheckboxIcon,
  CheckboxInvalid,
  CheckboxSize,
  CheckboxUncontrolled,
  CheckboxUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function CheckboxStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="checkboxUsage">
      <Stack.Screen
        name="checkboxUsage"
        component={CheckboxUsage}
        options={useHeaderOptions("Checkbox Basic", props)}
      />
      <Stack.Screen
        name="checkboxControlled"
        component={CheckboxControlled}
        options={useHeaderOptions("Controlled Checkbox", props)}
      />
      <Stack.Screen
        name="checkboxUncontrolled"
        component={CheckboxUncontrolled}
        options={useHeaderOptions("Uncontrolled Checkbox", props)}
      />
      <Stack.Screen
        name="checkboxDisabled"
        component={CheckboxDisabled}
        options={useHeaderOptions("Checkbox Disabled", props)}
      />
      <Stack.Screen
        name="checkboxInvalid"
        component={CheckboxInvalid}
        options={useHeaderOptions("Checkbox Invalid", props)}
      />
      <Stack.Screen
        name="checkboxSize"
        component={CheckboxSize}
        options={useHeaderOptions("Checkbox Size", props)}
      />
      <Stack.Screen
        name="checkboxColor"
        component={CheckboxColor}
        options={useHeaderOptions("Checkbox Color", props)}
      />
      <Stack.Screen
        name="checkboxIcon"
        component={CheckboxIcon}
        options={useHeaderOptions("Checkbox Icon", props)}
      />
      <Stack.Screen
        name="checkboxGroupExample"
        component={CheckboxGroupExample}
        options={useHeaderOptions("Checkbox Group", props)}
      />
      <Stack.Screen
        name="checkboxFormControlled"
        component={CheckboxFormControlled}
        options={useHeaderOptions("Checkbox Form Controlled", props)}
      />
    </Stack.Navigator>
  );
}
