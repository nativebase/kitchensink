import React from "react";
import { Alert } from "react-native";
import { Button } from "native-base";
import { Wrapper } from "../../components";

export const ButtonUsage = function () {
  return (
    <Wrapper>
      <Button
        size="sm"
        colorScheme="teal"
        variant={"solid"}
        onPress={() => Alert.alert("hello world")}
      >
        Button Variants
      </Button>
    </Wrapper>
  );
};
