import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HStackUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function HstackStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="hstackUsage">
      <Stack.Screen
        name="hstackUsage"
        component={HStackUsage}
        options={{
          headerTitle: "HStack Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
