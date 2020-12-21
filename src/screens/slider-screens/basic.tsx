import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "native-base";
import { Wrapper } from "../../components";

export const SliderBasic = function () {
  return (
    <Wrapper>
      <Box mx={5} width="80%">
        <Slider
          defaultValue={70}
          accessibilityIncrementSteps={10}
          accessibilityDecrementSteps={5}
          accessibilityLabel="This is a test slider"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </Wrapper>
  );
};
