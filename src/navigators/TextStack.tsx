import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TextBasic,
  TextFontSize,
  TextNested,
  TextOverriden,
  TextTruncated,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function TextStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="textUsage">
      <Stack.Screen
        name="textUsage"
        component={TextBasic}
        options={{
          headerTitle: "Text Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="textFontSize"
        component={TextFontSize}
        options={{
          headerTitle: "Text Changing FontSize",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="textTruncated"
        component={TextTruncated}
        options={{
          headerTitle: "Text Truncated",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="textOverriden"
        component={TextOverriden}
        options={{
          headerTitle: "Text Overriden",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="textNested"
        component={TextNested}
        options={{
          headerTitle: "Text Nested",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      
    </Stack.Navigator>
  );
}