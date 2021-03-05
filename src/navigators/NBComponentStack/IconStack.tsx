import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { IconCreate, IconCustom, IconUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function IconStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="iconUsage">
      <Stack.Screen
        name="iconUsage"
        component={IconUsage}
        options={useHeaderOptions("Icon Basic", props)}
      />
      <Stack.Screen
        name="iconCustom"
        component={IconCustom}
        options={useHeaderOptions("Custom Icon", props)}
      />
      <Stack.Screen
        name="iconCreate"
        component={IconCreate}
        options={useHeaderOptions("Create Icon", props)}
      />
    </Stack.Navigator>
  );
}
