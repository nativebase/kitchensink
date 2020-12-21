import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TabsAlignment,
  TabsBarOnly,
  TabsVariant,
  TabsColor,
  TabsComposition,
  TabsFitted,
  TabsSize,
  TabsUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function TabsStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="tabsUsage">
      <Stack.Screen
        name="tabsUsage"
        component={TabsUsage}
        options={{
          headerTitle: "Tab Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="tabsComposition"
        component={TabsComposition}
        options={{
          headerTitle: "Tab Composition",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="tabsVariant"
        component={TabsVariant}
        options={{
          headerTitle: "Tab Variants",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="tabsAlignment"
        component={TabsAlignment}
        options={{
          headerTitle: "Tab Alignment",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="tabsColor"
        component={TabsColor}
        options={{
          headerTitle: "Tab Colors",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="tabsFitted"
        component={TabsFitted}
        options={{
          headerTitle: "Tab isFitted",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="tabsBarOnly"
        component={TabsBarOnly}
        options={{
          headerTitle: "Tab Bar Only",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="tabsSize"
        component={TabsSize}
        options={{
          headerTitle: "Tab Size",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
