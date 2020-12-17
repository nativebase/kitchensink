import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CollapseCallbacks, CollapseDuration, CollapseUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function CollapseStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="collapseUsage">
      <Stack.Screen
        name="collapseUsage"
        component={CollapseUsage}
        options={{
          headerTitle: "Collapse Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="collapseDuration"
        component={CollapseDuration}
        options={{
          headerTitle: "Collapse Animation Duration",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="collapseCallbacks"
        component={CollapseCallbacks}
        options={{
          headerTitle: "Collapse onAnimationStart and onAnimationEnd",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
