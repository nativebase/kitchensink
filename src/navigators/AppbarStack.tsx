import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppbarExamples } from "../screens";
import { MenuButton } from "../components";
import { ThemeButton } from "../components";
import { useColorModeValue } from "native-base";

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
