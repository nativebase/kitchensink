import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "native-base";
import { Wrapper } from "../../components";

export const SliderColor = function () {
  return (
    <Wrapper>
      <Box mx={5} width="80%">
        <Slider defaultValue={70} colorScheme="red">
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </Wrapper>
  );
};
