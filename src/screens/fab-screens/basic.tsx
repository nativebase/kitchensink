import React from "react";
import { Fab, Icon, Text } from "native-base";
import { Wrapper } from "../../components";
export const FabBasic = function () {
  return (
    <Wrapper>
      <Fab
        placement={"bottom-right"}
        bg="teal.200"
        icon={<Icon name="plus" type="AntDesign" />}
      />
      <Fab
        bg="teal.200"
        position="absolute"
        bottom={4}
        right={24}
        icon={<Icon name="plus" type="AntDesign" />}
        label={<Text fontSize="sm">Click</Text>}
      />
    </Wrapper>
  );
};
