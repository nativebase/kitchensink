import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AlertDialogUsage, AlertDialogTransition } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function AlertDialogStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="AlertDialogUsage">
      <Stack.Screen
        name="alertDialogUsage"
        component={AlertDialogUsage}
        options={{
          headerTitle: "AlertDialog Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="alertDialogTransition"
        component={AlertDialogTransition}
        options={{
          headerTitle: "AlertDialog Transition",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
