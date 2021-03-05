import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ModalKeyboardAvoid,
  ModalRef,
  ModalSize,
  ModalUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ModalStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="modalUsage">
      <Stack.Screen
        name="modalUsage"
        component={ModalUsage}
        options={useHeaderOptions("Modal Basic", props)}
      />
      <Stack.Screen
        name="modalSize"
        component={ModalSize}
        options={useHeaderOptions("Modal Size", props)}
      />
      <Stack.Screen
        name="modalRef"
        component={ModalRef}
        options={useHeaderOptions("Modal Ref Example", props)}
      />
      <Stack.Screen
        name="modalKeyboardAvoid"
        component={ModalKeyboardAvoid}
        options={useHeaderOptions("Modal with Keyboard Avoid View", props)}
      />
    </Stack.Navigator>
  );
}
