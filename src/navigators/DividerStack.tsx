import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DividerComposition,
  DividerOrientation,
  DividerUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function DividerStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="dividerUsage">
      <Stack.Screen
        name="dividerUsage"
        component={DividerUsage}
        options={{
          headerTitle: "Divider Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="dividerOrientation"
        component={DividerOrientation}
        options={{
          headerTitle: "Divider Orientation",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="dividerComposition"
        component={DividerComposition}
        options={{
          headerTitle: "Divider Composition",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
