import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuGroupExample, MenuOGExample, MenuUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function MenuStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="menuUsage">
      <Stack.Screen
        name="menuUsage"
        component={MenuUsage}
        options={useHeaderOptions("Menu Basic", props)}
      />
      <Stack.Screen
        name="menuGroup"
        component={MenuGroupExample}
        options={useHeaderOptions("Menu Group", props)}
      />
      <Stack.Screen
        name="menuOptionGroup"
        component={MenuOGExample}
        options={useHeaderOptions("Menu Options Group", props)}
      />
    </Stack.Navigator>
  );
}
