import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  UseBreakpointValueUsage,
  UseClipboardUsage,
  UseDiscloseUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function UseHookStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="useBreakpointValue"
        component={UseBreakpointValueUsage}
        options={useHeaderOptions("useBreakpointValue Hook Basic", props)}
      />
      <Stack.Screen
        name="useClipboard"
        component={UseClipboardUsage}
        options={useHeaderOptions("useClipboard Hook Basic", props)}
      />
      <Stack.Screen
        name="useDisclose"
        component={UseDiscloseUsage}
        options={useHeaderOptions("useDisclose Hook Basic", props)}
      />
    </Stack.Navigator>
  );
}
