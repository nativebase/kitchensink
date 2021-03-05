import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CollapseCallbacks,
  CollapseDuration,
  CollapseUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function CollapseStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="collapseUsage">
      <Stack.Screen
        name="collapseUsage"
        component={CollapseUsage}
        options={useHeaderOptions("Collapse Basic", props)}
      />
      <Stack.Screen
        name="collapseDuration"
        component={CollapseDuration}
        options={useHeaderOptions("Collapse Animation Duration", props)}
      />
      <Stack.Screen
        name="collapseCallbacks"
        component={CollapseCallbacks}
        options={useHeaderOptions(
          "Collapse onAnimationStart and onAnimationEnd",
          props
        )}
      />
    </Stack.Navigator>
  );
}
