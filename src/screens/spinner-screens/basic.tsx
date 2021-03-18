import React from "react";
import { Spinner } from "native-base";
import { Wrapper } from "../../components";

export const SpinnerUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Spinner accessibilityLabel="Loading posts" />
    </Wrapper>
  );
};
