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
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function TabsStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="tabsUsage">
      <Stack.Screen
        name="tabsUsage"
        component={TabsUsage}
        options={useHeaderOptions("Tabs Basic", props)}
      />
      <Stack.Screen
        name="tabsComposition"
        component={TabsComposition}
        options={useHeaderOptions("Tabs Composition", props)}
      />
      <Stack.Screen
        name="tabsVariant"
        component={TabsVariant}
        options={useHeaderOptions("Tabs Variants", props)}
      />
      <Stack.Screen
        name="tabsAlignment"
        component={TabsAlignment}
        options={useHeaderOptions("Tabs Alignment", props)}
      />
      <Stack.Screen
        name="tabsColor"
        component={TabsColor}
        options={useHeaderOptions("Tabs Colors", props)}
      />
      <Stack.Screen
        name="tabsFitted"
        component={TabsFitted}
        options={useHeaderOptions("Tabs isFitted", props)}
      />
      <Stack.Screen
        name="tabsBarOnly"
        component={TabsBarOnly}
        options={useHeaderOptions("Tabs Bar Only", props)}
      />
      <Stack.Screen
        name="tabsSize"
        component={TabsSize}
        options={useHeaderOptions("Tabs Size", props)}
      />
    </Stack.Navigator>
  );
}
