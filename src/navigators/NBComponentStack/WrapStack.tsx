import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  WrapAlignmentAlign,
  WrapAlignmentJustify,
  WrapSpacing,
  WrapUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function WrapStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="wrapUsage"
        component={WrapUsage}
        options={useHeaderOptions("Wrap Basic", props)}
      />
      <Stack.Screen
        name="wrapSpacing"
        component={WrapSpacing}
        options={useHeaderOptions("Wrap Spacing", props)}
      />
      <Stack.Screen
        name="wrapAlignmentAlign"
        component={WrapAlignmentAlign}
        options={useHeaderOptions("Wrap Alignment Align", props)}
      />
      <Stack.Screen
        name="wrapAlignmentJustify"
        component={WrapAlignmentJustify}
        options={useHeaderOptions("Wrap Alignment Justify", props)}
      />
    </Stack.Navigator>
  );
}
