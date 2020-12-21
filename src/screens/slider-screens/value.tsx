import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Text,
} from "native-base";
import { Wrapper } from "../../components";

export const SliderValue = function () {
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(70);
  return (
    <Wrapper>
      <Stack mx={5} space={4} alignItems="center" width="80%">
        <Text>onChangeValue - {onChangeValue}</Text>
        <Text>onChangeEndValue - {onChangeEndValue}</Text>
        <Slider
          defaultValue={70}
          colorScheme="cyan"
          onChange={(v: any) => {
            setOnChangeValue(Math.floor(v));
          }}
          onChangeEnd={(v: any) => {
            v && setOnChangeEndValue(Math.floor(v));
          }}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Stack>
    </Wrapper>
  );
};
