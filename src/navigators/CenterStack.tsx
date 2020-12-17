import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CenterSquareCircle, CenterUsage, CenterWithIcons } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function CenterStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="centerUsage">
      <Stack.Screen
        name="centerUsage"
        component={CenterUsage}
        options={{
          headerTitle: "Center Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="centerWithIcons"
        component={CenterWithIcons}
        options={{
          headerTitle: "Center With Icons",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="centerSquareCircle"
        component={CenterSquareCircle}
        options={{
          headerTitle: "Center Square Circle",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
