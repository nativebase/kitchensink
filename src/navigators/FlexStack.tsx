import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FlexSpacer, FlexUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function FlexStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="flexUsage">
      <Stack.Screen
        name="flexUsage"
        component={FlexUsage}
        options={{
          headerTitle: "Flex Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="flexSpacer"
        component={FlexSpacer}
        options={{
          headerTitle: "Flex Spacer Example",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
