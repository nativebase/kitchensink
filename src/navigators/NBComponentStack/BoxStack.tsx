import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BoxComposite, BoxUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function BoxStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="boxUsage">
      <Stack.Screen
        name="boxUsage"
        component={BoxUsage}
        options={useHeaderOptions("Box Basic", props)}
      />
      <Stack.Screen
        name="boxComposite"
        component={BoxComposite}
        options={useHeaderOptions("Box Composite", props)}
      />
    </Stack.Navigator>
  );
}