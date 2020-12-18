import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ModeUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function ModeStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="modeUsage">
      <Stack.Screen
        name="modeUsage"
        component={ModeUsage}
        options={{
          headerTitle: "Mode Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}