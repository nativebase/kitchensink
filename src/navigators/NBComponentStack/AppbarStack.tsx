import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppbarExamples } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function AppbarStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="appbarExamples">
      <Stack.Screen
        name="appbarExamples"
        component={AppbarExamples}
        options={useHeaderOptions("App bar examples", props)}
      />
    </Stack.Navigator>
  );
}
