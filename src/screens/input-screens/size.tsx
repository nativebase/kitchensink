import React from "react";

import { Input, Stack, Center, Heading } from "native-base";
import { Wrapper } from "../../components";

export const InputSize = (props: any) => {
  return (
    <Wrapper {...props}>
      <Stack alignItems="center" space={4}>
        <Center>
          <Heading>Size Input</Heading>
        </Center>
        <Input w="90%" size="xs" placeholder="xs Input" />
        <Input w="90%" size="sm" placeholder="sm Input" />
        <Input w="90%" size="md" placeholder="md Input" />
        <Input w="90%" size="lg" placeholder="lg Input" />
        <Input w="90%" size="xl" placeholder="xl Input" />
        <Input w="90%" size="2xl" placeholder="2xl Input" />
      </Stack>
    </Wrapper>
  );
};
