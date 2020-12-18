import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NumberInpDefaultValue,
  NumberInpFormControlled,
  NumberInpMinMax,
  NumberInpSteps,
  NumberInpUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function NumberInputStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="numberInputUsage">
      <Stack.Screen
        name="numberInputUsage"
        component={NumberInpUsage}
        options={{
          headerTitle: "NumberInput Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="numberInputDefaultValue"
        component={NumberInpDefaultValue}
        options={{
          headerTitle: "NumberInput DefaultValue",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="numberInputMinMax"
        component={NumberInpMinMax}
        options={{
          headerTitle: "NumberInput Min Max",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="numberInputSteps"
        component={NumberInpSteps}
        options={{
          headerTitle: "NumberInput Steps",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="numberInputFormControlled"
        component={NumberInpFormControlled}
        options={{
          headerTitle: "NumberInput FormControlled",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
