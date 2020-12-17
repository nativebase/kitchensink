import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ColumnUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function ColumnStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="columnUsage">
      <Stack.Screen
        name="columnUsage"
        component={ColumnUsage}
        options={{
          headerTitle: "Column Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
