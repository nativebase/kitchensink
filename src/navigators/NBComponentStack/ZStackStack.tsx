import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ZStackUsage, ZStackCentered } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ZStackStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="zstackUsage"
        component={ZStackUsage}
        options={useHeaderOptions("ZStack Basic", props)}
      />
      <Stack.Screen
        name="zstackCentered"
        component={ZStackCentered}
        options={useHeaderOptions("ZStack items Centered", props)}
      />
    </Stack.Navigator>
  );
}
