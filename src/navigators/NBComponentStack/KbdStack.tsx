import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { KbdUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function KbdStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="kbdUsage">
      <Stack.Screen
        name="kbdUsage"
        component={KbdUsage}
        options={useHeaderOptions("Kbd Basic", props)}
      />
    </Stack.Navigator>
  );
}
