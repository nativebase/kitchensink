import React from "react";
import { Box, Image } from "native-base";
import { Wrapper } from "../../components";
export const ImageUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Box size={200}>
        <Image
          source={{
            uri: "https://nativebase.github.io/img/native-base-icon.png",
          }}
          alt="NativeBase logo"
        />
      </Box>
    </Wrapper>
  );
};
