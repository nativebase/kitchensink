import React from "react";
import { Heading, Link, View } from "native-base";
import { Wrapper } from "../../components";

export const LinkExternal = () => {
  return (
    <Wrapper>
      <View>
        <Heading>External Link</Heading>
        <Link href="https://nativebase.io" isExternal mt={4}>
          https://nativebase.io
        </Link>
      </View>
    </Wrapper>
  );
};
