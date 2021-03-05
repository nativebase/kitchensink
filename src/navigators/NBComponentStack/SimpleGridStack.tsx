import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleGridColumns, SimpleGridMinChildWidth } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function SimpleGridStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="simpleGridColumns">
      <Stack.Screen
        name="simpleGridColumns"
        component={SimpleGridColumns}
        options={useHeaderOptions("SimpleGrid using Columns", props)}
      />
      <Stack.Screen
        name="simpleGridMinChildWidth"
        component={SimpleGridMinChildWidth}
        options={useHeaderOptions("SimpleGrid using minChildWidth", props)}
      />
    </Stack.Navigator>
  );
}
