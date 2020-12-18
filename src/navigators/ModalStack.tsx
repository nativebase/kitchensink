import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ModalKeyboardAvoid,
  ModalRef,
  ModalSize,
  ModalUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function ModalStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="modalUsage">
      <Stack.Screen
        name="modalUsage"
        component={ModalUsage}
        options={{
          headerTitle: "Modal Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="modalSize"
        component={ModalSize}
        options={{
          headerTitle: "Modal Size",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="modalRef"
        component={ModalRef}
        options={{
          headerTitle: "Modal Ref Example",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="modalKeyboardAvoid"
        component={ModalKeyboardAvoid}
        options={{
          headerTitle: "Modal with Keyboard Avoid View",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
