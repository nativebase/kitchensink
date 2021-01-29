import React from "react";
import { Button, useToast, VStack } from "native-base";
import { Wrapper } from "../../components";

export const ToastPosition = function () {
  const toast  = useToast();
  return (
    <Wrapper>
      <VStack space={2}>
        <Button
          onPress={() => {
            toast({
              position: "top",
              title: "Top Toast",
            });
          }}
        >
          Top
        </Button>
        <Button
          onPress={() => {
            toast({
              position: "center",
              title: "Center",
            });
          }}
        >
          Center
        </Button>
        <Button
          onPress={() => {
            toast({
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
