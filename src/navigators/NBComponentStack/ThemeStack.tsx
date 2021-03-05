import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CustomThemeUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ThemeStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="customThemeUsage">
      <Stack.Screen
        name="customThemeUsage"
        component={CustomThemeUsage}
        options={useHeaderOptions("Custom Theme Example", props)}
      />
    </Stack.Navigator>
  );
}
