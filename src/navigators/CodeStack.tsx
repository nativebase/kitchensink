import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CodeUsage, CodeColor } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function CodeStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="codeUsage">
      <Stack.Screen
        name="codeUsage"
        component={CodeUsage}
        options={{
          headerTitle: "Code Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="codeColor"
        component={CodeColor}
        options={{
          headerTitle: "Code Colors",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}