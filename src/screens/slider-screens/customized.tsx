import React from "react";
import { Slider, Icon, Box } from "native-base";
import { Wrapper } from "../../components";

export const SliderCustomized = function (props: any) {
  return (
    <Wrapper {...props}>
      <Box mx={5} width="80%">
        <Slider defaultValue={70} colorScheme="orange">
          <Slider.Track bg="orange.100">
            <Slider.FilledTrack bg="green.400" />
          </Slider.Track>
          <Slider.Thumb>
            <Icon name="park" type="MaterialIcons" color="green.500" />
          </Slider.Thumb>
        </Slider>
      </Box>
    </Wrapper>
  );
};
