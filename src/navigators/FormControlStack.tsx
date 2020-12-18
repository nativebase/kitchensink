import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  FormControlFormik,
  FormControlStyle,
  FormControlUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function FormControlStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="formControlUsage">
      <Stack.Screen
        name="formControlUsage"
        component={FormControlUsage}
        options={{
          headerTitle: "FormControl Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="formControlFormik"
        component={FormControlFormik}
        options={{
          headerTitle: "FormControl Formik Example",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="formControlStyle"
        component={FormControlStyle}
        options={{
          headerTitle: "FormControl Custom Style Example",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
