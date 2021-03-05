import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RowUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function RowStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="rowUsage">
      <Stack.Screen
        name="rowUsage"
        component={RowUsage}
        options={useHeaderOptions("Row Basic", props)}
      />
    </Stack.Navigator>
  );
}
