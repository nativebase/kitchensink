import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  RadioColor,
  RadioControlled,
  RadioDisabled,
  RadioFormControlled,
  RadioIcon,
  RadioInvalid,
  RadioSize,
  RadioUnControlled,
  RadioRef,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function RadioStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="radioControlled">
      <Stack.Screen
        name="radioControlled"
        component={RadioControlled}
        options={{
          headerTitle: "Controlled Radio",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="radioUncontrolled"
        component={RadioUnControlled}
        options={{
          headerTitle: "Uncontrolled Radio",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="radioDisabled"
        component={RadioDisabled}
        options={{
          headerTitle: "Radio Disabled",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="radioInvalid"
        component={RadioInvalid}
        options={{
          headerTitle: "Radio Invalid",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="radioSize"
        component={RadioSize}
        options={{
          headerTitle: "Radio Size",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="radioColor"
        component={RadioColor}
        options={{
          headerTitle: "Radio Custom Color",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="radioIcon"
        component={RadioIcon}
        options={{
          headerTitle: "Radio Custom Icon",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="radioFormControlled"
        component={RadioFormControlled}
        options={{
          headerTitle: "Radio Form Controlled",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="RadioWithRef"
        component={RadioRef}
        options={{
          headerTitle: "Radio With Ref",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
