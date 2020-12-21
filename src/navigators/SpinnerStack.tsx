import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SpinnerColor, SpinnerSize, SpinnerUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function SpinnerStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="spinnerUsage">
      <Stack.Screen
        name="spinnerUsage"
        component={SpinnerUsage}
        options={{
          headerTitle: "Spinner Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="spinnerColor"
        component={SpinnerColor}
        options={{
          headerTitle: "Spinner Color",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="spinnerSize"
        component={SpinnerSize}
        options={{
          headerTitle: "Spinner Size",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
