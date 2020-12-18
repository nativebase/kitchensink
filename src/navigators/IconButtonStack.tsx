import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { IconButtonSize, IconButtonUsage, IconButtonVariant } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function IconButtonStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="iconButtonUsage">
      <Stack.Screen
        name="iconButtonUsage"
        component={IconButtonUsage}
        options={{
          headerTitle: "Icon Button Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="iconButtonSize"
        component={IconButtonSize}
        options={{
          headerTitle: "Icon Button Sizes",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="iconButtonVariant"
        component={IconButtonVariant}
        options={{
          headerTitle: "Icon Button Variants",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
