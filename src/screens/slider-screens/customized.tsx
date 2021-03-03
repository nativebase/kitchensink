import React from "react";
import { Slider, Icon, Box } from "native-base";
import { Wrapper } from "../../components";

export const SliderCustomized = function () {
  return (
    <Wrapper>
      <Box mx={5} width="80%">
        <Slider defaultValue={70} colorScheme="purple">
          <Slider.Track bg="orange.100">
            <Slider.FilledTrack bg="orange.400" />
          </Slider.Track>
          <Slider.Thumb>
            <Icon name="circle" type="MaterialIcons" />
          </Slider.Thumb>
        </Slider>
      </Box>
    </Wrapper>
  );
};
