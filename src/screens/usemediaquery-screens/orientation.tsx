import React from "react";
import { Text, useMediaQuery } from "native-base";
import { Wrapper } from "../../components";

export const UseMediaQueryOrientation = function () {
  const [isLandScape, isPortrait] = useMediaQuery([
    { orientation: "landscape" },
    { orientation: "portrait" },
  ]);
  return (
    <Wrapper>
      <Text>{`Landscape Mode: ${isLandScape}`}</Text>
      <Text>{`Portrait Mode: ${isPortrait}`}</Text>
    </Wrapper>
  );
};
