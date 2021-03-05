import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NumberInpDefaultValue,
  NumberInpFormControlled,
  NumberInpMinMax,
  NumberInpSteps,
  NumberInpUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function NumberInputStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="numberInputUsage">
      <Stack.Screen
        name="numberInputUsage"
        component={NumberInpUsage}
        options={useHeaderOptions("NumberInput Basic", props)}
      />
      <Stack.Screen
        name="numberInputDefaultValue"
        component={NumberInpDefaultValue}
        options={useHeaderOptions("NumberInput DefaultValue", props)}
      />
      <Stack.Screen
        name="numberInputMinMax"
        component={NumberInpMinMax}
        options={useHeaderOptions("NumberInput Min Max", props)}
      />
      <Stack.Screen
        name="numberInputSteps"
        component={NumberInpSteps}
        options={useHeaderOptions("NumberInput Steps", props)}
      />
      <Stack.Screen
        name="numberInputFormControlled"
        component={NumberInpFormControlled}
        options={useHeaderOptions("NumberInput FormControlled", props)}
      />
    </Stack.Navigator>
  );
}
