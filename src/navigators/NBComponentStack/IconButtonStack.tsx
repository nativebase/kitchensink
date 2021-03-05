import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  IconButtonSize,
  IconButtonUsage,
  IconButtonSVGIcon,
  IconButtonVariant,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function IconButtonStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="iconButtonUsage">
      <Stack.Screen
        name="iconButtonUsage"
        component={IconButtonUsage}
        options={useHeaderOptions("Icon Button Basic", props)}
      />
      <Stack.Screen
        name="iconButtonSize"
        component={IconButtonSize}
        options={useHeaderOptions("Icon Button Sizes", props)}
      />
      <Stack.Screen
        name="iconButtonSVGIcon"
        component={IconButtonSVGIcon}
        options={useHeaderOptions("Icon Button SVG Icon", props)}
      />
      <Stack.Screen
        name="iconButtonVariant"
        component={IconButtonVariant}
        options={useHeaderOptions("Icon Button Variants", props)}
      />
    </Stack.Navigator>
  );
}
