import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ContainerCentering, ContainerUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function ContainerStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="containerUsage">
      <Stack.Screen
        name="containerUsage"
        component={ContainerUsage}
        options={{
          headerTitle: "Container Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="containerCentering"
        component={ContainerCentering}
        options={{
          headerTitle: "Container Centering Children",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
