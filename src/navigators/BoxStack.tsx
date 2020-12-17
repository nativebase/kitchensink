import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BoxComposite, BoxRef, BoxUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function BoxStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="boxUsage">
      <Stack.Screen
        name="boxUsage"
        component={BoxUsage}
        options={{
          headerTitle: "Box Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="boxComposite"
        component={BoxComposite}
        options={{
          headerTitle: "Box Composite",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="boxRef"
        component={BoxRef}
        options={{
          headerTitle: "Box with Refs",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
