import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BreadCrumbComponentSeparator,
  BreadCrumbComposition,
  BreadCrumbSeparators,
  BreadCrumbUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function BreadCrumbStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="breadCrumbUsage">
      <Stack.Screen
        name="breadCrumbUsage"
        component={BreadCrumbUsage}
        options={{
          headerTitle: "BreadCrumb Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="breadCrumbSeparator"
        component={BreadCrumbSeparators}
        options={{
          headerTitle: "BreadCrumb Separator",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="breadCrumbComponentSeparator"
        component={BreadCrumbComponentSeparator}
        options={{
          headerTitle: "BreadCrumb Component Separator",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="breadCrumbComposition"
        component={BreadCrumbComposition}
        options={{
          headerTitle: "BreadCrumb Composition",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}