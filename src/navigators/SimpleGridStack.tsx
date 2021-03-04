import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleGridColumns, SimpleGridMinChildWidth } from "../screens";
import { MenuButton } from "../components";
import { ThemeButton } from "../components";
import { useColorModeValue } from "native-base";

const Stack = createStackNavigator();
export function SimpleGridStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="simpleGridColumns">
      <Stack.Screen
        name="simpleGridColumns"
        component={SimpleGridColumns}
        options={{
          headerTitle: "SimpleGrid using Columns",
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
        name="simpleGridMinChildWidth"
        component={SimpleGridMinChildWidth}
        options={{
          headerTitle: "SimpleGrid using minChildWidth",
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
