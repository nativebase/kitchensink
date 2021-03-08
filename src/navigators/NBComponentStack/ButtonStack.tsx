import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ButtonComposition,
  ButtonGroupExample,
  ButtonIcon,
  ButtonLoading,
  ButtonSize,
  ButtonUsage,
  ButtonVariant,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ButtonStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="buttonUsage">
      <Stack.Screen
        name="buttonUsage"
        component={ButtonUsage}
        options={useHeaderOptions("Button Basic", props)}
      />
      <Stack.Screen
        name="buttonSize"
        component={ButtonSize}
        options={useHeaderOptions("Button Sizes", props)}
      />
      <Stack.Screen
        name="buttonVariant"
        component={ButtonVariant}
        options={useHeaderOptions("Button Variants", props)}
      />
      <Stack.Screen
        name="buttonLoading"
        component={ButtonLoading}
        options={useHeaderOptions("Button Loading", props)}
      />
      <Stack.Screen
        name="buttonIcon"
        component={ButtonIcon}
        options={useHeaderOptions("Button Icons", props)}
      />
      <Stack.Screen
        name="buttonGroupExample"
        component={ButtonGroupExample}
        options={useHeaderOptions("Button Group", props)}
      />
      <Stack.Screen
        name="buttonComposition"
        component={ButtonComposition}
        options={useHeaderOptions("Button Composition", props)}
      />
    </Stack.Navigator>
  );
}
