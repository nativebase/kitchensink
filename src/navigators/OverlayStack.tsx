import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OverlayCustomized, OverlayUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function OverlayStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="overlayUsage">
      <Stack.Screen
        name="overlayUsage"
        component={OverlayUsage}
        options={{
          headerTitle: "Overlay Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="overlayCustomized"
        component={OverlayCustomized}
        options={{
          headerTitle: "Overlay Customized",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
