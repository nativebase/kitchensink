import React from "react";
import { Spinner } from "native-base";
import { Wrapper } from "../../components";
export const SpinnerDuration = function () {
  return (
    <Wrapper>
      <Spinner color="danger.400" variant="dotted" size="lg" duration={1000} />
    </Wrapper>
  );
};
