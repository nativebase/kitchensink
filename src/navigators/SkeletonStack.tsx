import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SkeletonColor, SkeletonLoaded, SkeletonUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function SkeletonStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="skeletonUsage">
      <Stack.Screen
        name="skeletonUsage"
        component={SkeletonUsage}
        options={{
          headerTitle: "Skeleton Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="skeletonColor"
        component={SkeletonColor}
        options={{
          headerTitle: "Skeleton Color",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="skeletonLoaded"
        component={SkeletonLoaded}
        options={{
          headerTitle: "Skeleton Loaded",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
