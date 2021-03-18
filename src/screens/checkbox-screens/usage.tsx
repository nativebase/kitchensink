import React from "react";
import { Checkbox } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
    </Wrapper>
  );
};
