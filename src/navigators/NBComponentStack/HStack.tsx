import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HStackUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function HstackStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="hstackUsage">
      <Stack.Screen
        name="hstackUsage"
        component={HStackUsage}
        options={useHeaderOptions("HStack Basic", props)}
      />
    </Stack.Navigator>
  );
}
