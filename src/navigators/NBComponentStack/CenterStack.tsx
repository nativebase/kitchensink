import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CenterSquareCircle,
  CenterUsage,
  CenterWithIcons,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function CenterStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="centerUsage">
      <Stack.Screen
        name="centerUsage"
        component={CenterUsage}
        options={useHeaderOptions("Center Basic", props)}
      />
      <Stack.Screen
        name="centerWithIcons"
        component={CenterWithIcons}
        options={useHeaderOptions("Center With Icons", props)}
      />
      <Stack.Screen
        name="centerSquareCircle"
        component={CenterSquareCircle}
        options={useHeaderOptions("Center Square Circle", props)}
      />
    </Stack.Navigator>
  );
}
