import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ImageBR,
  ImageFallback,
  ImageRef,
  ImageSize,
  ImageUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function ImageStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="imageUsage">
      <Stack.Screen
        name="imageUsage"
        component={ImageUsage}
        options={useHeaderOptions("Image Basic", props)}
      />
      <Stack.Screen
        name="imageSize"
        component={ImageSize}
        options={useHeaderOptions("Image Size", props)}
      />
      <Stack.Screen
        name="imageBorderRadius"
        component={ImageBR}
        options={useHeaderOptions("Image Border Radius", props)}
      />
      <Stack.Screen
        name="imageFallback"
        component={ImageFallback}
        options={useHeaderOptions("Image Fallback", props)}
      />
      <Stack.Screen
        name="imageRef"
        component={ImageRef}
        options={useHeaderOptions("Image With Ref", props)}
      />
    </Stack.Navigator>
  );
}
