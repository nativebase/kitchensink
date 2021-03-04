import React from "react";
import { Heading, Link, View } from "native-base";
import { Wrapper } from "../../components";

export const LinkExternal = () => {
  return (
    <Wrapper>
      <View>
        <Heading>External Link</Heading>
        <Link
          _text={{ color: "blue.700" }}
          href="https://nativebase.io"
          isExternal
          mt={4}
        >
          https://nativebase.io
        </Link>
      </View>
    </Wrapper>
  );
};
