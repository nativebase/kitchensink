import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DividerComposition,
  DividerOrientation,
  DividerUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function DividerStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="dividerUsage">
      <Stack.Screen
        name="dividerUsage"
        component={DividerUsage}
        options={useHeaderOptions("Divider Basic", props)}
      />
      <Stack.Screen
        name="dividerOrientation"
        component={DividerOrientation}
        options={useHeaderOptions("Divider Orientation", props)}
      />
      <Stack.Screen
        name="dividerComposition"
        component={DividerComposition}
        options={useHeaderOptions("Divider Composition", props)}
      />
    </Stack.Navigator>
  );
}
