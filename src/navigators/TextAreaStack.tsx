import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TextAreaInvalidDisabled,
  TextAreaUsage,
  TextAreaSize,
  TextAreaValueControlled,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function TextAreaStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="textAreaUsage">
      <Stack.Screen
        name="textAreaUsage"
        component={TextAreaUsage}
        options={{
          headerTitle: "TextArea Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="textAreaInvalidDisabled"
        component={TextAreaInvalidDisabled}
        options={{
          headerTitle: "TextArea Invalid and Disabled",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="textAreaSize"
        component={TextAreaSize}
        options={{
          headerTitle: "TextArea Sizes",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="textAreaValueControlled"
        component={TextAreaValueControlled}
        options={{
          headerTitle: "TextArea Value Controlled",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
     
    </Stack.Navigator>
  );
}
