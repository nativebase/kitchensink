import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LinkComposite,
  LinkExternal,
  LinkNotUnderlined,
  LinkOnpress,
  LinkUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function LinkStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="linkUsage">
      <Stack.Screen
        name="linkUsage"
        component={LinkUsage}
        options={{
          headerTitle: "Link Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="linkExternal"
        component={LinkExternal}
        options={{
          headerTitle: "Link External",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="linkNotUnderlined"
        component={LinkNotUnderlined}
        options={{
          headerTitle: "Link not Underlined",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="linkOnpress"
        component={LinkOnpress}
        options={{
          headerTitle: "Link Custom onPress",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="linkComposite"
        component={LinkComposite}
        options={{
          headerTitle: "Link Composite",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
