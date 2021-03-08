import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ResponsiveMore,
  ResponsiveUsage,
  ResposiveFontSize,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ResponsiveStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="responsiveUsage">
      <Stack.Screen
        name="responsiveUsage"
        component={ResponsiveUsage}
        options={useHeaderOptions("Responsive Basic", props)}
      />
      <Stack.Screen
        name="responsiveFontSize"
        component={ResposiveFontSize}
        options={useHeaderOptions("Resposive FontSize", props)}
      />
      <Stack.Screen
        name="responsiveMore"
        component={ResponsiveMore}
        options={useHeaderOptions("Resposive More", props)}
      />
    </Stack.Navigator>
  );
}
