import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AccordionUsage,
  AccordionAccessingInternalState,
  AccordionDefaultIndex,
  AccordionExpandedStyle,
  AccordionMultiple,
  AccordionToggle,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function AccordionStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="accordionUsage">
      <Stack.Screen
        name="accordionUsage"
        component={AccordionUsage}
        options={useHeaderOptions("Accordion Basic", props)}
      />
      <Stack.Screen
        name="accordionMultiple"
        component={AccordionMultiple}
        options={useHeaderOptions("Accordion Multiple", props)}
      />
      <Stack.Screen
        name="accordionDefaultIndex"
        component={AccordionDefaultIndex}
        options={useHeaderOptions("Accordion Default Inde", props)}
      />
      <Stack.Screen
        name="accordionToggle"
        component={AccordionToggle}
        options={useHeaderOptions("Accordion Toggle", props)}
      />
      <Stack.Screen
        name="accordionExpandedStyle"
        component={AccordionExpandedStyle}
        options={useHeaderOptions("Accordion Expanded Style", props)}
      />
      <Stack.Screen
        name="accordionAccessingInternalState"
        component={AccordionAccessingInternalState}
        options={useHeaderOptions("Accordion Accessing Internal State", props)}
      />
    </Stack.Navigator>
  );
}
