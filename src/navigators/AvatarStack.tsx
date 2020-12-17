import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AvatarBadgeExample,
  AvatarFallback,
  AvatarGroupExample,
  AvatarSizes,
  AvatarUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function AvatarStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="avatarUsage">
      <Stack.Screen
        name="avatarUsage"
        component={AvatarUsage}
        options={{
          headerTitle: "Avatar Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="avatarSize"
        component={AvatarSizes}
        options={{
          headerTitle: "Avatar Sizes",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="avatarFallback"
        component={AvatarFallback}
        options={{
          headerTitle: "Avatar Fallback",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="avatarBadge"
        component={AvatarBadgeExample}
        options={{
          headerTitle: "Avatar Badge",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="avatarGroup"
        component={AvatarGroupExample}
        options={{
          headerTitle: "Avatar Group",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
