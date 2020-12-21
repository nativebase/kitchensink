import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  UseMediaQueryMaxHeight,
  UseMediaQueryMinWidth,
  UseMediaQueryOrientation,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function UseMediaQueryStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="useMediaQueryMinWidth"
        component={UseMediaQueryMinWidth}
        options={{
          headerTitle: "UseMediaQuery MinWidth",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="useMediaQueryMaxHeight"
        component={UseMediaQueryMaxHeight}
        options={{
          headerTitle: "UseMediaQuery MaxHeight",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="useMediaQueryOrientation"
        component={UseMediaQueryOrientation}
        options={{
          headerTitle: "UseMediaQuery Orientation",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
