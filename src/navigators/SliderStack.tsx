import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SliderBasic,
  SliderColor,
  SliderCustomized,
  SliderFormControlled,
  SliderSize,
  SliderValue,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function SliderStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="sliderUsage">
      <Stack.Screen
        name="sliderUsage"
        component={SliderBasic}
        options={{
          headerTitle: "Slider Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="sliderSize"
        component={SliderSize}
        options={{
          headerTitle: "Slider Size",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="sliderColor"
        component={SliderColor}
        options={{
          headerTitle: "Slider Color",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="sliderValue"
        component={SliderValue}
        options={{
          headerTitle: "Slider Value",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="sliderCustomized"
        component={SliderCustomized}
        options={{
          headerTitle: "Slider Customized",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="sliderFormControlled"
        component={SliderFormControlled}
        options={{
          headerTitle: "Slider Form Controlled",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
