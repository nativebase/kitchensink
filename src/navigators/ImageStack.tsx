import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ImageBR,
  ImageFallback,
  ImageRef,
  ImageSize,
  ImageUsage,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function ImageStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="imageUsage">
      <Stack.Screen
        name="imageUsage"
        component={ImageUsage}
        options={{
          headerTitle: "Image Usage",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="imageSize"
        component={ImageSize}
        options={{
          headerTitle: "Image Size",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="imageBorderRadius"
        component={ImageBR}
        options={{
          headerTitle: "Image Border Radius",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="imageFallback"
        component={ImageFallback}
        options={{
          headerTitle: "Image Fallback",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="imageRef"
        component={ImageRef}
        options={{
          headerTitle: "Image With Ref",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
