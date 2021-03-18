import React from "react";
import { Switch, VStack } from "native-base";
import { Wrapper } from "../../components";

export const SwitchBgColor = function (props: any) {
  return (
    <Wrapper {...props}>
      <VStack space={4}>
        <Switch />
        <Switch offTrackColor="rose.200" onTrackColor="lime.200" />
        <Switch offThumbColor="rose.200" onThumbColor="lime.200" />
      </VStack>
    </Wrapper>
  );
};
