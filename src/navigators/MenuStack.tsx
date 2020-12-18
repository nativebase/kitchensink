import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuGroupExample, MenuOGExample, MenuUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function MenuStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="menuUsage">
      <Stack.Screen
        name="menuUsage"
        component={MenuUsage}
        options={{
          headerTitle: "Menu Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="menuGroup"
        component={MenuGroupExample}
        options={{
          headerTitle: "Menu Group",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="menuOptionGroup"
        component={MenuOGExample}
        options={{
          headerTitle: "Menu Options Group",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
