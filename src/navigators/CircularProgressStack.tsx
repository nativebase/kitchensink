import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CircularProgressColor,
  CircularProgressIndeterminate,
  CircularProgressLabelExample,
  CircularProgressMinMax,
  CircularProgressSize,
  CircularProgressThickness,
  CircularProgressTrackColor,
  CircularProgressUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function CircularProgressStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="circularProgressUsage">
      <Stack.Screen
        name="circularProgressUsage"
        component={CircularProgressUsage}
        options={{
          headerTitle: "CircularProgress Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="circularProgressSize"
        component={CircularProgressSize}
        options={{
          headerTitle: "CircularProgress Size",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="circularProgressColor"
        component={CircularProgressColor}
        options={{
          headerTitle: "CircularProgress Colors",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="circularProgressThickness"
        component={CircularProgressThickness}
        options={{
          headerTitle: "CircularProgress Thickness",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="circularProgressTrackColor"
        component={CircularProgressTrackColor}
        options={{
          headerTitle: "CircularProgress Track Color",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="circularProgressLabel"
        component={CircularProgressLabelExample}
        options={{
          headerTitle: "CircularProgress Label",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="circularProgressMinMax"
        component={CircularProgressMinMax}
        options={{
          headerTitle: "CircularProgress Min and Max",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="circularProgressIndeterminate"
        component={CircularProgressIndeterminate}
        options={{
          headerTitle: "CircularProgress Indeterminate",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
