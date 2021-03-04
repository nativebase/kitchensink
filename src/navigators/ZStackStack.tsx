import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ZStackUsage, ZStackCentered } from "../screens";
import { MenuButton } from "../components";
import { ThemeButton } from "../components";
import { useColorModeValue } from "native-base";

const Stack = createStackNavigator();
export function ZStackStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="zstackUsage"
        component={ZStackUsage}
        options={{
          headerTitle: "ZStack Usage",
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
      <Stack.Screen
        name="zstackCentered"
        component={ZStackCentered}
        options={{
          headerTitle: "ZStack items Centered",
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
