import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CodeUsage, CodeColor } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function CodeStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="codeUsage">
      <Stack.Screen
        name="codeUsage"
        component={CodeUsage}
        options={useHeaderOptions("Code Basic", props)}
      />
      <Stack.Screen
        name="codeColor"
        component={CodeColor}
        options={useHeaderOptions("Code Colors", props)}
      />
    </Stack.Navigator>
  );
}
