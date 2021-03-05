import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AvatarBadgeExample,
  AvatarFallback,
  AvatarGroupExample,
  AvatarSizes,
  AvatarUsage,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function AvatarStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="avatarUsage">
      <Stack.Screen
        name="avatarUsage"
        component={AvatarUsage}
        options={useHeaderOptions("Avatar Basic", props)}
      />
      <Stack.Screen
        name="avatarSize"
        component={AvatarSizes}
        options={useHeaderOptions("Avatar Sizes", props)}
      />
      <Stack.Screen
        name="avatarFallback"
        component={AvatarFallback}
        options={useHeaderOptions("Avatar Fallback", props)}
      />
      <Stack.Screen
        name="avatarBadge"
        component={AvatarBadgeExample}
        options={useHeaderOptions("Avatar Badge", props)}
      />
      <Stack.Screen
        name="avatarGroup"
        component={AvatarGroupExample}
        options={useHeaderOptions("Avatar Group", props)}
      />
    </Stack.Navigator>
  );
}
