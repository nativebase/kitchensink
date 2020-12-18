import React from "react";

import { Input, Stack, Center, Heading } from "native-base";
import { Wrapper } from "../../components";

export const InputVariant = () => {
  return (
    <Wrapper>
      <Stack space={4}>
        <Center>
          <Heading>Input Variants</Heading>
        </Center>
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="underlined" placeholder="Underlined" />
        <Input variant="unstyled" placeholder="Unstyled" />
        <Input variant="rounded" placeholder="round" />
      </Stack>
    </Wrapper>
  );
};
