import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BoxComposite,
  BoxUsage,
  BoxCompositeCard,
  BoxCompositeShoeCard,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function BoxStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="boxUsage">
      <Stack.Screen
        name="boxUsage"
        component={BoxUsage}
        options={useHeaderOptions("Box Basic", props)}
      />
      <Stack.Screen
        name="boxComposite"
        component={BoxComposite}
        options={useHeaderOptions("Box Composite", props)}
      />
      <Stack.Screen
        name="boxCompositeCard"
        component={BoxCompositeCard}
        options={useHeaderOptions("Box Composite Card", props)}
      />
      <Stack.Screen
        name="boxCompositeShoeCard"
        component={BoxCompositeShoeCard}
        options={useHeaderOptions("Box Composite Shoes Card", props)}
      />
    </Stack.Navigator>
  );
}
