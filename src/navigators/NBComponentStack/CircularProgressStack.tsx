import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CircularProgressColor,
  CircularProgressIndeterminate,
  CircularProgressLabelExample,
  CircularProgressMinMax,
  CircularProgressSize,
  CircularProgressThickness,
  CircularProgressTrackColor,
  CircularProgressUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function CircularProgressStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="circularProgressUsage">
      <Stack.Screen
        name="circularProgressUsage"
        component={CircularProgressUsage}
        options={useHeaderOptions("CircularProgress Basic", props)}
      />
      <Stack.Screen
        name="circularProgressSize"
        component={CircularProgressSize}
        options={useHeaderOptions("CircularProgress Size", props)}
      />
      <Stack.Screen
        name="circularProgressColor"
        component={CircularProgressColor}
        options={useHeaderOptions("CircularProgress Colors", props)}
      />
      <Stack.Screen
        name="circularProgressThickness"
        component={CircularProgressThickness}
        options={useHeaderOptions("CircularProgress Thickness", props)}
      />
      <Stack.Screen
        name="circularProgressTrackColor"
        component={CircularProgressTrackColor}
        options={useHeaderOptions("CircularProgress Track Color", props)}
      />
      <Stack.Screen
        name="circularProgressLabel"
        component={CircularProgressLabelExample}
        options={useHeaderOptions("CircularProgress Label", props)}
      />
      <Stack.Screen
        name="circularProgressMinMax"
        component={CircularProgressMinMax}
        options={useHeaderOptions("CircularProgress Min and Max", props)}
      />
      <Stack.Screen
        name="circularProgressIndeterminate"
        component={CircularProgressIndeterminate}
        options={useHeaderOptions("CircularProgress Indeterminate", props)}
      />
    </Stack.Navigator>
  );
}
