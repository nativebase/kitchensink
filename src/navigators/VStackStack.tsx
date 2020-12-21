import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { VStackUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function VStackStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="vstackUsage"
        component={VStackUsage}
        options={{
          headerTitle: "VStack Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
