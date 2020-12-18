import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ListIcons, ListUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function ListStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="listUsage">
      <Stack.Screen
        name="listUsage"
        component={ListUsage}
        options={{
          headerTitle: "List Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="listIcons"
        component={ListIcons}
        options={{
          headerTitle: "List with Icons",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
