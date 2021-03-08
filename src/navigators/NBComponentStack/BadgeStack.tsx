import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BadgeColor, BadgeUsage, BadgeVariants } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function BadgeStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="badgeUsage">
      <Stack.Screen
        name="badgeUsage"
        component={BadgeUsage}
        options={useHeaderOptions("Badge Basic", props)}
      />
      <Stack.Screen
        name="badgeColor"
        component={BadgeColor}
        options={useHeaderOptions("Badge Color", props)}
      />
      <Stack.Screen
        name="badgeVariant"
        component={BadgeVariants}
        options={useHeaderOptions("Badge Variants", props)}
      />
    </Stack.Navigator>
  );
}
