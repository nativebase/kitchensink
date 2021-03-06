import React from "react";
import { Image } from "native-base";
import { Wrapper } from "../../components";
export const ImageBR = function () {
  return (
    <Wrapper>
      <Image
        size={150}
        resizeMode={"contain"}
        alt="nativebase"
        borderRadius={100}
        source={{
          uri: "https://nativebase.github.io/img/native-base-icon.png",
        }}
      />
    </Wrapper>
  );
};
