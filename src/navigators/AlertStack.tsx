import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AlertUsage,
  AlertComposition,
  AlertStatus,
  AlertVariants,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function AlertStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="alertUsage">
      <Stack.Screen
        name="alertUsage"
        component={AlertUsage}
        options={{
          headerTitle: "Alert Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="alertStatus"
        component={AlertStatus}
        options={{
          headerTitle: "Alert Status",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="alertVariants"
        component={AlertVariants}
        options={{
          headerTitle: "Alert Variants",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="alertComposition"
        component={AlertComposition}
        options={{
          headerTitle: "Alert Composition",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
