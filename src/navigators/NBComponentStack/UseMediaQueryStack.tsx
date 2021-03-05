import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  UseMediaQueryMaxHeight,
  UseMediaQueryMinWidth,
  UseMediaQueryOrientation,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function UseMediaQueryStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="useMediaQueryMinWidth"
        component={UseMediaQueryMinWidth}
        options={useHeaderOptions("UseMediaQuery MinWidth", props)}
      />
      <Stack.Screen
        name="useMediaQueryMaxHeight"
        component={UseMediaQueryMaxHeight}
        options={useHeaderOptions("UseMediaQuery MaxHeight", props)}
      />
      <Stack.Screen
        name="useMediaQueryOrientation"
        component={UseMediaQueryOrientation}
        options={useHeaderOptions("UseMediaQuery Orientation", props)}
      />
    </Stack.Navigator>
  );
}
