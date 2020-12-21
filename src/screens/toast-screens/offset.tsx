import React from "react";
import { Button, useToast } from "native-base";
import { Wrapper } from "../../components";

export const ToastOffset = function () {
  const { setToast } = useToast();

  return (
    <Wrapper>
      <Button
        onPress={() => {
          setToast({
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
