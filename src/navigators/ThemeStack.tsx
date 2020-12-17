import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CustomThemeUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function ThemeStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="customThemeUsage">
      <Stack.Screen
        name="customThemeUsage"
        component={CustomThemeUsage}
        options={{
          headerTitle: "Custom Theme Example",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
