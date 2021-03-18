import React from "react";
import { Badge } from "native-base";
import { Wrapper } from "../../components";

export const BadgeUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Badge>DEFAULT BADGE</Badge>
    </Wrapper>
  );
};
