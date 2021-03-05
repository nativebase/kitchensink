import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BreadCrumbComponentSeparator,
  BreadCrumbComposition,
  BreadCrumbSeparators,
  BreadCrumbUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function BreadCrumbStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="breadCrumbUsage">
      <Stack.Screen
        name="breadCrumbUsage"
        component={BreadCrumbUsage}
        options={useHeaderOptions("BreadCrumb Basic", props)}
      />
      <Stack.Screen
        name="breadCrumbSeparator"
        component={BreadCrumbSeparators}
        options={useHeaderOptions("BreadCrumb Separator", props)}
      />
      <Stack.Screen
        name="breadCrumbComponentSeparator"
        component={BreadCrumbComponentSeparator}
        options={useHeaderOptions("BreadCrumb Component Separator", props)}
      />
      <Stack.Screen
        name="breadCrumbComposition"
        component={BreadCrumbComposition}
        options={useHeaderOptions("BreadCrumb Composition", props)}
      />
    </Stack.Navigator>
  );
}
