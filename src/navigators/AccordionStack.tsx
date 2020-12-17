import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AccordionUsage,
  AccordionAccessingInternalState,
  AccordionDefaultIndex,
  AccordionExpandedStyle,
  AccordionMultiple,
  AccordionToggle,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function AccordionStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="accordionUsage">
      <Stack.Screen
        name="accordionUsage"
        component={AccordionUsage}
        options={{
          headerTitle: "Accordion Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="accordionMultiple"
        component={AccordionMultiple}
        options={{
          headerTitle: "Accordion Multiple",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="accordionDefaultIndex"
        component={AccordionDefaultIndex}
        options={{
          headerTitle: "Accordion Default Index",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="accordionToggle"
        component={AccordionToggle}
        options={{
          headerTitle: "Accordion Toggle",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="accordionExpandedStyle"
        component={AccordionExpandedStyle}
        options={{
          headerTitle: "Accordion Expanded Style",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="accordionAccessingInternalState"
        component={AccordionAccessingInternalState}
        options={{
          headerTitle: "Accordion Accessing Internal State",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
