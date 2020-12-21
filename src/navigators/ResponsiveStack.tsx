import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ResponsiveDemo,
  ResponsiveMore,
  ResponsiveUsage,
  ResposiveFontSize,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function ResponsiveStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="responsiveUsage">
      <Stack.Screen
        name="responsiveUsage"
        component={ResponsiveUsage}
        options={{
          headerTitle: "Responsive Basic",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="responsiveFontSize"
        component={ResposiveFontSize}
        options={{
          headerTitle: "Resposive FontSize",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="responsiveMore"
        component={ResponsiveMore}
        options={{
          headerTitle: "Resposive More",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="responsiveDemo"
        component={ResponsiveDemo}
        options={{
          headerTitle: "Resposive Demo",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
