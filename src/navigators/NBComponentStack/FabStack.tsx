import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FabBasic } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function FabStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="codeUsage">
      <Stack.Screen
        name="codeUsage"
        component={FabBasic}
        options={useHeaderOptions("Fab Basic", props)}
      />
    </Stack.Navigator>
  );
}
