import React from "react";
import { CircularProgress, Heading, Center } from "native-base";
import { Wrapper } from "../../components";
export const CircularProgressTrackColor = function (props: any) {
  return (
    <Wrapper {...props}>
      <Center>
        <Heading>Changing the TrackColor</Heading>
        <CircularProgress
          mt={6}
          size={80}
          thickness={10}
          value={20}
          trackColor="blue.100"
        />
      </Center>
    </Wrapper>
  );
};
