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
        onPress={() => console.log("hello world")}
        _text={{ fontWeight: 700 }}
      >
        Press me
      </Button>
    </Wrapper>
  );
};
