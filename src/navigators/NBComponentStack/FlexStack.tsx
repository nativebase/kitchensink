import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FlexSpacer, FlexUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function FlexStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="flexUsage">
      <Stack.Screen
        name="flexUsage"
        component={FlexUsage}
        options={useHeaderOptions("Flex Basic", props)}
      />
      <Stack.Screen
        name="flexSpacer"
        component={FlexSpacer}
        options={useHeaderOptions("Flex Spacer Example", props)}
      />
    </Stack.Navigator>
  );
}
