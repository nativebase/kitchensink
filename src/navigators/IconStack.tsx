import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { IconCreate, IconCustom, IconUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function IconStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="iconUsage">
      <Stack.Screen
        name="iconUsage"
        component={IconUsage}
        options={{
          headerTitle: "Icon Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="iconCustom"
        component={IconCustom}
        options={{
          headerTitle: "Custom Icon",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="iconCreate"
        component={IconCreate}
        options={{
          headerTitle: "Create Icon",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
