import React from "react";
import { Button, useToast } from "native-base";
import { Wrapper } from "../../components";

export const ToastOffset = function () {
  const  toast = useToast();

  return (
    <Wrapper>
      <Button
        onPress={() => {
          toast({
            position: "center",
            duration: 1000,
            title: "Toast Center",
            offset: { x: 100, y: 100 },
          });
        }}
      >
        Show Offset Toast
      </Button>
    </Wrapper>
  );
};
