import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SelectUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function SelectStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="selectUsage">
      <Stack.Screen
        name="selectUsage"
        component={SelectUsage}
        options={{
          headerTitle: "Select examples",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
