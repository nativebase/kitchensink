import React from "react";
import { View, Text } from "native-base";
import { Wrapper } from "../../components";

export const ViewBasic = function (props: any) {
  return (
    <Wrapper {...props}>
      <View bg="teal.400" height={200} width={200}>
        <Text>Test Text</Text>
      </View>
    </Wrapper>
  );
};
