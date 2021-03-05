import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatDefault, StatIndicator } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function StatStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="statDefault">
      <Stack.Screen
        name="statDefault"
        component={StatDefault}
        options={useHeaderOptions("Stat Default", props)}
      />
      <Stack.Screen
        name="statIndicator"
        component={StatIndicator}
        options={useHeaderOptions("Stat with Indicator", props)}
      />
    </Stack.Navigator>
  );
}
