import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TransitionFade,
  TransitionScaleFade,
  TransitionSlide,
  TransitionSlideComposition,
  TransitionSlideFade,
  TransitionSlideWrapped,
} from "../screens";
import { MenuButton } from "../components";

const Stack = createStackNavigator();
export function TransitionStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="transitionFade">
      <Stack.Screen
        name="transitionFade"
        component={TransitionFade}
        options={{
          headerTitle: "Transition Fade",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="transitionScaleFade"
        component={TransitionScaleFade}
        options={{
          headerTitle: "Transition Scale Fade",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="transitionSlide"
        component={TransitionSlide}
        options={{
          headerTitle: "Transition Slide",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="transitionSlideWrapped"
        component={TransitionSlideWrapped}
        options={{
          headerTitle: "Transition Slide Wrapped inside parent",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="transitionSlideComposition"
        component={TransitionSlideComposition}
        options={{
          headerTitle: "Transition Slide Composition",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      <Stack.Screen
        name="transitionSlideFade"
        component={TransitionSlideFade}
        options={{
          headerTitle: "Transition Slide Fade",
          headerLeft: () => {
            return <MenuButton toggleDrawer={props.navigation.toggleDrawer} />;
          },
        }}
      />
      
    </Stack.Navigator>
  );
}
