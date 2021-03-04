import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { KbdUsage } from "../screens";
import { MenuButton } from "../components";
import { ThemeButton } from "../components";
import { useColorModeValue } from "native-base";

const Stack = createStackNavigator();
export function KbdStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="kbdUsage">
      <Stack.Screen
        name="kbdUsage"
        component={KbdUsage}
        options={{
          headerTitle: "Kbd Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
          headerStyle: {
            backgroundColor: useColorModeValue("#f5f5f5", "#3f3f46"),
          },
          headerTitleStyle: {
            color: useColorModeValue("#000", "#fff"),
          },
          headerRight: () => {
            return <ThemeButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
