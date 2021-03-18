import React from "react";
import { Slider, Box } from "native-base";
import { Wrapper } from "../../components";

export const SliderColor = function (props: any) {
  return (
    <Wrapper {...props}>
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
