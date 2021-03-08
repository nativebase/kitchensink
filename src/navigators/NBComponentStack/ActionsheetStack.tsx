import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ActionsheetUsage, ActionsheetDisableOverlay } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ActionsheetStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="actionsheetUsage">
      <Stack.Screen
        name="actionsheetUsage"
        component={ActionsheetUsage}
        options={useHeaderOptions("Actionsheet Basic", props)}
      />
      <Stack.Screen
        name="actionsheetDisableOverlay"
        component={ActionsheetDisableOverlay}
        options={useHeaderOptions("Actionsheet DisableOverlay", props)}
      />
    </Stack.Navigator>
  );
}
