import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ViewBasic } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ViewStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="viewBasic"
        component={ViewBasic}
        options={useHeaderOptions("View Basic", props)}
      />
    </Stack.Navigator>
  );
}
