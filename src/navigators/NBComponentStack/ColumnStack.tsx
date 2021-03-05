import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ColumnUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ColumnStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="columnUsage">
      <Stack.Screen
        name="columnUsage"
        component={ColumnUsage}
        options={useHeaderOptions("Column Basic", props)}
      />
    </Stack.Navigator>
  );
}
