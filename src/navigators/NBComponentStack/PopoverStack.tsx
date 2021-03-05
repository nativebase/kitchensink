import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PopoverRef, PopoverSize, PopoverUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function PopoverStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="popoverUsage">
      <Stack.Screen
        name="popoverUsage"
        component={PopoverUsage}
        options={useHeaderOptions("Popover Basic", props)}
      />
      <Stack.Screen
        name="popoverSize"
        component={PopoverSize}
        options={useHeaderOptions("Popover Size", props)}
      />
      <Stack.Screen
        name="popoverRef"
        component={PopoverRef}
        options={useHeaderOptions("Popover Focus on Open", props)}
      />
    </Stack.Navigator>
  );
}
