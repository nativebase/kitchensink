import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { KbdUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function KbdStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="kbdUsage">
      <Stack.Screen
        name="kbdUsage"
        component={KbdUsage}
        options={{
          headerTitle: "Kbd Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
