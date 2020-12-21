import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function StackStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="stackUsage">
      <Stack.Screen
        name="stackUsage"
        component={StackUsage}
        options={{
          headerTitle: "Stack Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
