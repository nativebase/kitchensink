import React from "react";
import { Button, useToast, VStack } from "native-base";
import { Wrapper } from "../../components";

export const ToastPosition = function () {
  const { setToast } = useToast();
  return (
    <Wrapper>
      <VStack space={2}>
        <Button
          onPress={() => {
            setToast({
              position: "top",
              title: "Top Toast",
            });
          }}
        >
          Top
        </Button>
        <Button
          onPress={() => {
            setToast({
              position: "center",
              title: "Center",
            });
          }}
        >
          Center
        </Button>
        <Button
          onPress={() => {
            setToast({
              position: "bottom",
              title: "Bottom",
            });
          }}
        >
          Bottom
        </Button>
      </VStack>
    </Wrapper>
  );
};
