import React from "react";
import { Spinner } from "native-base";
import { Wrapper } from "../../components";

export const SpinnerUsage = function () {
  return (
    <Wrapper>
      <Spinner accessibilityLabel="Loading posts" />
    </Wrapper>
  );
};
