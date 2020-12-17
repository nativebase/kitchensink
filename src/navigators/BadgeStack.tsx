import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BadgeColor, BadgeUsage, BadgeVariants } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function BadgeStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="badgeUsage">
      <Stack.Screen
        name="badgeUsage"
        component={BadgeUsage}
        options={{
          headerTitle: "Badge Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="badgeColor"
        component={BadgeColor}
        options={{
          headerTitle: "Badge Color",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="badgeVariant"
        component={BadgeVariants}
        options={{
          headerTitle: "Badge Variants",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
