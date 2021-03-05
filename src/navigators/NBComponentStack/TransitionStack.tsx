import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TransitionFade,
  TransitionScaleFade,
  TransitionSlide,
  TransitionSlideComposition,
  TransitionSlideFade,
  TransitionSlideWrapped,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function TransitionStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="transitionFade">
      <Stack.Screen
        name="transitionFade"
        component={TransitionFade}
        options={useHeaderOptions("Transition Fade", props)}
      />
      <Stack.Screen
        name="transitionScaleFade"
        component={TransitionScaleFade}
        options={useHeaderOptions("Transition Scale Fade", props)}
      />
      <Stack.Screen
        name="transitionSlide"
        component={TransitionSlide}
        options={useHeaderOptions("Transition Slide", props)}
      />
      <Stack.Screen
        name="transitionSlideWrapped"
        component={TransitionSlideWrapped}
        options={useHeaderOptions(
          "Transition Slide Wrapped inside parent",
          props
        )}
      />
      <Stack.Screen
        name="transitionSlideComposition"
        component={TransitionSlideComposition}
        options={useHeaderOptions("Transition Slide Composition", props)}
      />
      <Stack.Screen
        name="transitionSlideFade"
        component={TransitionSlideFade}
        options={useHeaderOptions("Transition Slide Fade", props)}
      />
    </Stack.Navigator>
  );
}
