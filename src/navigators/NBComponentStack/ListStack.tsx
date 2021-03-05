import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ListIcons,
  ListBasic,
  ListOrdered,
  ListUnordered,
  ListStyled,
  ListVirtualized,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ListStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="listUsage">
      <Stack.Screen
        name="listBasic"
        component={ListBasic}
        options={useHeaderOptions("List Basic", props)}
      />
      <Stack.Screen
        name="listIcons"
        component={ListIcons}
        options={useHeaderOptions("List with Icons", props)}
      />
      <Stack.Screen
        name="listOrdered"
        component={ListOrdered}
        options={useHeaderOptions("Ordered List", props)}
      />
      <Stack.Screen
        name="listUnordered"
        component={ListUnordered}
        options={useHeaderOptions("Unordered List", props)}
      />
      <Stack.Screen
        name="listStyled"
        component={ListStyled}
        options={useHeaderOptions("Styled List", props)}
      />
      <Stack.Screen
        name="listVirtualized"
        component={ListVirtualized}
        options={useHeaderOptions("Virtualized List", props)}
      />
    </Stack.Navigator>
  );
}
