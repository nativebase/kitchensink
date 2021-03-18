import React from "react";
import { Heading, Link, View } from "native-base";
import { Wrapper } from "../../components";

export const LinkNotUnderlined = (props: any) => {
  return (
    <Wrapper {...props}>
      <View>
        <Heading>Link without underline</Heading>
        <Link isUnderlined={false} mt={4}>
          www.google.com
        </Link>
      </View>
    </Wrapper>
  );
};
