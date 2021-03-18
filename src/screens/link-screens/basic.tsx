import React from "react";
import { Heading, Link, View } from "native-base";
import { Wrapper } from "../../components";

export const LinkUsage = (props: any) => {
  return (
    <Wrapper {...props}>
      <View>
        <Heading>This is default Link</Heading>
        <Link mt={4} fontSize="xl">
          Default Link
        </Link>
      </View>
    </Wrapper>
  );
};
