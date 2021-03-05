import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ContainerCentering, ContainerUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ContainerStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="containerUsage">
      <Stack.Screen
        name="containerUsage"
        component={ContainerUsage}
        options={useHeaderOptions("Container Basic", props)}
      />
      <Stack.Screen
        name="containerCentering"
        component={ContainerCentering}
        options={useHeaderOptions("Container Centering Children", props)}
      />
    </Stack.Navigator>
  );
}
