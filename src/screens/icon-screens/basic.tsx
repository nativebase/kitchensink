import React from "react";
import { Icon } from "native-base";
import { Wrapper } from "../../components";

export const IconUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Icon name="menu" type="MaterialIcons" />
      <Icon type="Ionicons" name="md-checkmark-circle" />
      <Icon name="stepforward" type="AntDesign" />
    </Wrapper>
  );
};
