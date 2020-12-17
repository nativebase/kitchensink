import React from "react";
import { Checkbox } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxUsage = function () {
  return (
    <Wrapper>
      <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
    </Wrapper>
  );
};
