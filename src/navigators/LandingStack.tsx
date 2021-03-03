import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LandingScreen, AppbarExamples } from "../screens";
import { Drawer } from "./Drawer";

const Stack = createStackNavigator();

export function LandingStack() {
  return (
    <Stack.Navigator initialRouteName="landing">
      <Stack.Screen
        name="landing"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="drawer"
        component={Drawer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
