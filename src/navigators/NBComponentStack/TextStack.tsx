import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TextBasic,
  TextFontSize,
  TextNested,
  TextOverriden,
  TextTruncated,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function TextStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="textUsage">
      <Stack.Screen
        name="textUsage"
        component={TextBasic}
        options={useHeaderOptions("Text Basic", props)}
      />
      <Stack.Screen
        name="textFontSize"
        component={TextFontSize}
        options={useHeaderOptions("Text Changing FontSize", props)}
      />
      <Stack.Screen
        name="textTruncated"
        component={TextTruncated}
        options={useHeaderOptions("Text Truncated", props)}
      />
      <Stack.Screen
        name="textOverriden"
        component={TextOverriden}
        options={useHeaderOptions("Text Overriden", props)}
      />
      <Stack.Screen
        name="textNested"
        component={TextNested}
        options={useHeaderOptions("Text Nested", props)}
      />
    </Stack.Navigator>
  );
}
