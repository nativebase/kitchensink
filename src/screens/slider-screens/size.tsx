import React from "react";
import { Slider, VStack } from "native-base";
import { Wrapper } from "../../components";

export const SliderSize = function (props: any) {
  return (
    <Wrapper {...props}>
      <VStack space={4} width="80%">
        <Slider defaultValue={40} colorScheme="red" size="lg">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Slider defaultValue={60} colorScheme="purple">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Slider defaultValue={80} colorScheme="green" size="sm">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </VStack>
    </Wrapper>
  );
};
