import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SelectBasic, SelectNative, SelectStyled } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function SelectStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="selectBasic">
      <Stack.Screen
        name="selectBasic"
        component={SelectBasic}
        options={useHeaderOptions("Select Basic", props)}
      />
      <Stack.Screen
        name="selectNative"
        component={SelectNative}
        options={useHeaderOptions("Select Native", props)}
      />
      <Stack.Screen
        name="selectStyled"
        component={SelectStyled}
        options={useHeaderOptions("Select Styled", props)}
      />
    </Stack.Navigator>
  );
}
