import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  FormControlFormik,
  FormControlStyle,
  FormControlUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function FormControlStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="formControlUsage">
      <Stack.Screen
        name="formControlUsage"
        component={FormControlUsage}
        options={useHeaderOptions("FormControl Basic", props)}
      />
      <Stack.Screen
        name="formControlFormik"
        component={FormControlFormik}
        options={useHeaderOptions("FormControl Formik Example", props)}
      />
      <Stack.Screen
        name="formControlStyle"
        component={FormControlStyle}
        options={useHeaderOptions("FormControl Custom Style Example", props)}
      />
    </Stack.Navigator>
  );
}
