import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LandingStack } from "./LandingStack";

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="landingStack">
      <Stack.Screen
        options={{ headerShown: false }}
        name="landingStack"
        component={LandingStack}
      />
    </Stack.Navigator>
  );
}
