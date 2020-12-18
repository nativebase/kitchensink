import React from "react";
import { Heading, Link, View } from "native-base";
import { Wrapper } from "../../components";

export const LinkNotUnderlined = () => {
  return (
    <Wrapper>
      <View>
        <Heading>Link without underline</Heading>
        <Link isUnderlined={false} mt={4}>
          www.google.com
        </Link>
      </View>
    </Wrapper>
  );
};
