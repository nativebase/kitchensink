import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TagCustom,
  TagVariantsExample,
  TagWithIconExample,
  TagSize,
  TagUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function TagStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="tagUsage">
      <Stack.Screen
        name="tagUsage"
        component={TagUsage}
        options={useHeaderOptions("Tag Basic", props)}
      />
      <Stack.Screen
        name="tagSize"
        component={TagSize}
        options={useHeaderOptions("Tag Size", props)}
      />
      <Stack.Screen
        name="tagVariants"
        component={TagVariantsExample}
        options={useHeaderOptions("Tag Variants", props)}
      />
      <Stack.Screen
        name="tagWithIcon"
        component={TagWithIconExample}
        options={useHeaderOptions("Tag With Icon", props)}
      />
      <Stack.Screen
        name="tagCustom"
        component={TagCustom}
        options={useHeaderOptions("Tag Custom", props)}
      />
    </Stack.Navigator>
  );
}
