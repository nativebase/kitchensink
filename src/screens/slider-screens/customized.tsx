import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Icon,
  Box,
} from "native-base";
import { Wrapper } from "../../components";

export const SliderCustomized = function () {
  return (
    <Wrapper>
      <Box mx={5} width="80%">
        <Slider defaultValue={70} colorScheme="purple">
          <SliderTrack bg="orange.100">
            <SliderFilledTrack bg="orange.400" />
          </SliderTrack>
          <SliderThumb>
            <Icon name="circle" type="MaterialIcons" />
          </SliderThumb>
        </Slider>
      </Box>
    </Wrapper>
  );
};
