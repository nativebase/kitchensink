import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CloseButtonSize, CloseButtonUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function CloseButtonStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="closeButtonUsage">
      <Stack.Screen
        name="closeButtonUsage"
        component={CloseButtonUsage}
        options={useHeaderOptions("CloseButton Basic", props)}
      />
      <Stack.Screen
        name="closeButtonSize"
        component={CloseButtonSize}
        options={useHeaderOptions("CloseButton Size", props)}
      />
    </Stack.Navigator>
  );
}
