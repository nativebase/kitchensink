import React from "react";

import { Input } from "native-base";
import { Wrapper } from "../../components";

export const InputUsage = (props: any) => {
  return (
    <Wrapper {...props}>
      <Input placeholder="Default Input" />
    </Wrapper>
  );
};
