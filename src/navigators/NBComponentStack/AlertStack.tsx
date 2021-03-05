import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AlertUsage,
  AlertComposition,
  AlertStatus,
  AlertVariants,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function AlertStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="alertUsage">
      <Stack.Screen
        name="alertUsage"
        component={AlertUsage}
        options={useHeaderOptions("Alert Basic", props)}
      />
      <Stack.Screen
        name="alertStatus"
        component={AlertStatus}
        options={useHeaderOptions("Alert Status", props)}
      />
      <Stack.Screen
        name="alertVariants"
        component={AlertVariants}
        options={useHeaderOptions("UsAlert Variantsage", props)}
      />
      <Stack.Screen
        name="alertComposition"
        component={AlertComposition}
        options={useHeaderOptions("Alert Composition", props)}
      />
    </Stack.Navigator>
  );
}
