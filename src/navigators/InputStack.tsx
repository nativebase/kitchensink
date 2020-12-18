import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  InputAddons,
  InputControlled,
  InputElements,
  InputFocusError,
  InputPassword,
  InputSize,
  InputUsage,
  InputVariant,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function InputStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="inputUsage">
      <Stack.Screen
        name="inputUsage"
        component={InputUsage}
        options={{
          headerTitle: "Input Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="inputSize"
        component={InputSize}
        options={{
          headerTitle: "Input Sizes",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="inputVariant"
        component={InputVariant}
        options={{
          headerTitle: "Input Variants",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="inputAddon"
        component={InputAddons}
        options={{
          headerTitle: "Input Addons",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="inputElement"
        component={InputElements}
        options={{
          headerTitle: "Input Elements",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="inputPassword"
        component={InputPassword}
        options={{
          headerTitle: "Input Password Example",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="inputControlled"
        component={InputControlled}
        options={{
          headerTitle: "Value Controlled Input",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="inputFocusError"
        component={InputFocusError}
        options={{
          headerTitle: "Input Focus and Error Borders",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
