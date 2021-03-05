import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ModeUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ModeStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="modeUsage">
      <Stack.Screen
        name="modeUsage"
        component={ModeUsage}
        options={useHeaderOptions("Mode Basic", props)}
      />
    </Stack.Navigator>
  );
}
