import React from "react";

import {
  Input,
  Stack,
  Text,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "native-base";
import { Wrapper } from "../../components";

export const InputAddons = () => {
  return (
    <Wrapper>
      <Stack space={4}>
        <InputGroup>
          <InputLeftAddon children={<Text>https://</Text>} />
          <Input w="70%" placeholder="nativebase" />
          <InputRightAddon children={<Text>.io</Text>} />
        </InputGroup>
      </Stack>
    </Wrapper>
  );
};
