import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function StackStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="stackUsage">
      <Stack.Screen
        name="stackUsage"
        component={StackUsage}
        options={useHeaderOptions("Stack Basic", props)}
      />
    </Stack.Navigator>
  );
}
