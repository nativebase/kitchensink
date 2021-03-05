import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TypeaheadRenderItem,
  TypeaheadHook,
  TypeaheadBasic,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function TypeaheadStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="toastUsage">
      <Stack.Screen
        name="typeaheadBasic"
        component={TypeaheadBasic}
        options={useHeaderOptions("Typeahead Baisc", props)}
      />
      <Stack.Screen
        name="typeaheadHook"
        component={TypeaheadHook}
        options={useHeaderOptions("Typeahead Hook", props)}
      />
      <Stack.Screen
        name="typeaheadRenderItem"
        component={TypeaheadRenderItem}
        options={useHeaderOptions("Typeahead Render Item", props)}
      />
    </Stack.Navigator>
  );
}
