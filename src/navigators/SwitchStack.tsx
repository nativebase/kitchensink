import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SwitchBgColor, SwitchSize, SwitchUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function SwitchStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="switchUsage">
      <Stack.Screen
        name="switchUsage"
        component={SwitchUsage}
        options={{
          headerTitle: "Switch Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="switchSize"
        component={SwitchSize}
        options={{
          headerTitle: "Switch Sizes",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="switchBgColor"
        component={SwitchBgColor}
        options={{
          headerTitle: "Switch BgColor",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}