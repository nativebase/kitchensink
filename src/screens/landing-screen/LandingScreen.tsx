import React from "react";
import { Heading, Button } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
type LandingScreenNavigationProp = StackNavigationProp<any>;
type IProp = {
  navigation: LandingScreenNavigationProp;
};

import { Wrapper } from "../../components";
export function LandingScreen({ navigation }: IProp) {
  return (
    <Wrapper>
      <Heading>Nativebase V3 Kitchen Sink</Heading>
      <Button
        mt={16}
        onPress={() => {
          navigation.navigate("drawer");
        }}
        colorScheme="green"
      >
        Let's Start
      </Button>
    </Wrapper>
  );
}
