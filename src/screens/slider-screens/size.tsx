import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
} from "native-base";
import { Wrapper } from "../../components";

export const SliderSize = function () {
  return (
    <Wrapper>
      <VStack space={4} width="80%">
        <Slider defaultValue={40} colorScheme="red" size="lg">
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Slider defaultValue={60} colorScheme="purple">
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Slider defaultValue={80} colorScheme="green" size="sm">
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </VStack>
    </Wrapper>
  );
};
