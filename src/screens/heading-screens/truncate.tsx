import React from "react";
import { Heading } from "native-base";
import { Wrapper } from "../../components";

export const HeadingTruncate = function () {
  return (
    <Wrapper>
      <Heading isTruncated>
        Basic text writing, including headings, body text, lists, and more.
      </Heading>
    </Wrapper>
  );
};
