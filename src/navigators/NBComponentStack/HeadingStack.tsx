import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HeadingComposition,
  HeadingOverriden,
  HeadingSize,
  HeadingTruncate,
  HeadingUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function HeadingStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="headingUsage">
      <Stack.Screen
        name="headingUsage"
        component={HeadingUsage}
        options={useHeaderOptions("Heading Basic", props)}
      />
      <Stack.Screen
        name="headingSize"
        component={HeadingSize}
        options={useHeaderOptions("Heading Sizes", props)}
      />
      <Stack.Screen
        name="headingTruncate"
        component={HeadingTruncate}
        options={useHeaderOptions("Heading Truncate", props)}
      />
      <Stack.Screen
        name="headingOverriden"
        component={HeadingOverriden}
        options={useHeaderOptions("Heading Overriden Style", props)}
      />
      <Stack.Screen
        name="headingComposition"
        component={HeadingComposition}
        options={useHeaderOptions("Heading Composition", props)}
      />
    </Stack.Navigator>
  );
}
