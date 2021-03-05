import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TextAreaInvalidDisabled,
  TextAreaUsage,
  TextAreaSize,
  TextAreaValueControlled,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function TextAreaStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="textAreaUsage">
      <Stack.Screen
        name="textAreaUsage"
        component={TextAreaUsage}
        options={useHeaderOptions("TextArea Basic", props)}
      />
      <Stack.Screen
        name="textAreaInvalidDisabled"
        component={TextAreaInvalidDisabled}
        options={useHeaderOptions("TextArea Invalid and Disabled", props)}
      />
      <Stack.Screen
        name="textAreaSize"
        component={TextAreaSize}
        options={useHeaderOptions("TextArea Sizes", props)}
      />
      <Stack.Screen
        name="textAreaValueControlled"
        component={TextAreaValueControlled}
        options={useHeaderOptions("TextArea Value Controlled", props)}
      />
    </Stack.Navigator>
  );
}
