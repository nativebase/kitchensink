import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AspectRatioEmbedImage, AspectRatioUsage } from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function AspectRatioStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="aspectRatioUsage">
      <Stack.Screen
        name="aspectRatioUsage"
        component={AspectRatioUsage}
        options={{
          headerTitle: "AspectRatio Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="aspectRatioEmbedImage"
        component={AspectRatioEmbedImage}
        options={{
          headerTitle: "AspectRatio Embed Image",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
