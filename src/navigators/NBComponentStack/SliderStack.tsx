import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SliderBasic,
  SliderColor,
  SliderCustomized,
  SliderFormControlled,
  SliderVertical,
  SliderSize,
  SliderValue,
} from "../../screens";
import { useHeaderOptions } from "../../components";

const Stack = createStackNavigator();
export function SliderStack(props: any) {
  return (
    <Stack.Navigator initialRouteName="sliderUsage">
      <Stack.Screen
        name="sliderUsage"
        component={SliderBasic}
        options={useHeaderOptions("Slider Basic", props)}
      />
      <Stack.Screen
        name="sliderSize"
        component={SliderSize}
        options={useHeaderOptions("Slider Size", props)}
      />
      <Stack.Screen
        name="sliderColor"
        component={SliderColor}
        options={useHeaderOptions("Slider Color", props)}
      />
      <Stack.Screen
        name="sliderValue"
        component={SliderValue}
        options={useHeaderOptions("Slider Value", props)}
      />
      <Stack.Screen
        name="sliderCustomized"
        component={SliderCustomized}
        options={useHeaderOptions("Slider Customized", props)}
      />
      <Stack.Screen
        name="sliderFormControlled"
        component={SliderFormControlled}
        options={useHeaderOptions("Slider Form Controlled", props)}
      />
      <Stack.Screen
        name="sliderVertical"
        component={SliderVertical}
        options={useHeaderOptions("Slider Vertical", props)}
      />
    </Stack.Navigator>
  );
}
