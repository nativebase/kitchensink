import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LinkComposite,
  LinkExternal,
  LinkNotUnderlined,
  LinkOnpress,
  LinkUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function LinkStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="linkUsage">
      <Stack.Screen
        name="linkUsage"
        component={LinkUsage}
        options={useHeaderOptions("Link Basic", props)}
      />
      <Stack.Screen
        name="linkExternal"
        component={LinkExternal}
        options={useHeaderOptions("Link External", props)}
      />
      <Stack.Screen
        name="linkNotUnderlined"
        component={LinkNotUnderlined}
        options={useHeaderOptions("Link not Underlined", props)}
      />
      <Stack.Screen
        name="linkOnpress"
        component={LinkOnpress}
        options={useHeaderOptions("Link Custom onPress", props)}
      />
      <Stack.Screen
        name="linkComposite"
        component={LinkComposite}
        options={useHeaderOptions("Link Composite", props)}
      />
    </Stack.Navigator>
  );
}
