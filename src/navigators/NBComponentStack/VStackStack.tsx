import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { VStackUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function VStackStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="vstackUsage"
        component={VStackUsage}
        options={useHeaderOptions("VStack Basic", props)}
      />
    </Stack.Navigator>
  );
}
