import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OverlayCustomized, OverlayUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function OverlayStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="overlayUsage">
      <Stack.Screen
        name="overlayUsage"
        component={OverlayUsage}
        options={useHeaderOptions("Overlay Basic", props)}
      />
      <Stack.Screen
        name="overlayCustomized"
        component={OverlayCustomized}
        options={useHeaderOptions("Overlay Customized", props)}
      />
    </Stack.Navigator>
  );
}
