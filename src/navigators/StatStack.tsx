import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatDefault, StatIndicator } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function StatStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="statDefault">
      <Stack.Screen
        name="statDefault"
        component={StatDefault}
        options={{
          headerTitle: "Stat Default",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="statIndicator"
        component={StatIndicator}
        options={{
          headerTitle: "Stat with Indicator",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
