import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AspectRatioEmbedImage, AspectRatioUsage } from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function AspectRatioStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="aspectRatioUsage">
      <Stack.Screen
        name="aspectRatioUsage"
        component={AspectRatioUsage}
        options={useHeaderOptions("AspectRatio Basic", props)}
      />
      <Stack.Screen
        name="aspectRatioEmbedImage"
        component={AspectRatioEmbedImage}
        options={useHeaderOptions("AspectRatio Embed Image", props)}
      />
    </Stack.Navigator>
  );
}
