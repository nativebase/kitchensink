import React from "react";
import { HStack, Image } from "native-base";
import { Wrapper } from "../../components";
export const ImageSize = function () {
  return (
    <Wrapper>
      <HStack alignItems="center">
        <Image
          size={12}
          resizeMode="cover"
          source={{
            uri: "https://nativebase.github.io/img/native-base-icon.png",
          }}
          alt="nativebase"
        />
        <Image
          size={20}
          resizeMode="cover"
          source={{
            uri: "https://nativebase.github.io/img/native-base-icon.png",
          }}
          alt="nativebase"
        />
        <Image
          size={32}
          source={{
            uri: "https://nativebase.github.io/img/native-base-icon.png",
          }}
          alt="nativebase"
        />
      </HStack>
    </Wrapper>
  );
};
