import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppbarExamples } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function AppbarStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="appbarExamples">
      <Stack.Screen
        name="appbarExamples"
        component={AppbarExamples}
        options={{
          headerTitle: "App bar examples",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
