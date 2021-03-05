import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SkeletonColor, SkeletonLoaded, SkeletonUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function SkeletonStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="skeletonUsage">
      <Stack.Screen
        name="skeletonUsage"
        component={SkeletonUsage}
        options={useHeaderOptions("Skeleton Basic", props)}
      />
      <Stack.Screen
        name="skeletonColor"
        component={SkeletonColor}
        options={useHeaderOptions("Skeleton Color", props)}
      />
      <Stack.Screen
        name="skeletonLoaded"
        component={SkeletonLoaded}
        options={useHeaderOptions("Skeleton Loaded", props)}
      />
    </Stack.Navigator>
  );
}
