import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AlertDialogUsage, AlertDialogTransition } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function AlertDialogStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="AlertDialogUsage">
      <Stack.Screen
        name="alertDialogUsage"
        component={AlertDialogUsage}
        options={useHeaderOptions("AlertDialog Basic", props)}
      />
      <Stack.Screen
        name="alertDialogTransition"
        component={AlertDialogTransition}
        options={useHeaderOptions("AlertDialog Transition", props)}
      />
    </Stack.Navigator>
  );
}
