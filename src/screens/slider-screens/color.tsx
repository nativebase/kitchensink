import React from "react";
import { Slider, Box } from "native-base";
import { Wrapper } from "../../components";

export const SliderColor = function () {
  return (
    <Wrapper>
      <Box mx={5} width="80%">
        <Slider defaultValue={70} colorScheme="red">
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    </Wrapper>
  );
};
