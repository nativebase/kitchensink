import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  RadioColor,
  RadioControlled,
  RadioDisabled,
  RadioFormControlled,
  RadioIcon,
  RadioInvalid,
  RadioSize,
  RadioUnControlled,
  RadioRef,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function RadioStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="radioControlled">
      <Stack.Screen
        name="radioControlled"
        component={RadioControlled}
        options={useHeaderOptions("Controlled Radio", props)}
      />
      <Stack.Screen
        name="radioUncontrolled"
        component={RadioUnControlled}
        options={useHeaderOptions("Uncontrolled Radio", props)}
      />
      <Stack.Screen
        name="radioDisabled"
        component={RadioDisabled}
        options={useHeaderOptions("Radio Disabled", props)}
      />
      <Stack.Screen
        name="radioInvalid"
        component={RadioInvalid}
        options={useHeaderOptions("Radio Invalid", props)}
      />
      <Stack.Screen
        name="radioSize"
        component={RadioSize}
        options={useHeaderOptions("Radio Size", props)}
      />
      <Stack.Screen
        name="radioColor"
        component={RadioColor}
        options={useHeaderOptions("Radio Custom Color", props)}
      />
      <Stack.Screen
        name="radioIcon"
        component={RadioIcon}
        options={useHeaderOptions("Radio Custom Icon", props)}
      />
      <Stack.Screen
        name="radioFormControlled"
        component={RadioFormControlled}
        options={useHeaderOptions("Radio Form Controlle", props)}
      />
      <Stack.Screen
        name="RadioWithRef"
        component={RadioRef}
        options={useHeaderOptions("Radio With Ref", props)}
      />
    </Stack.Navigator>
  );
}
