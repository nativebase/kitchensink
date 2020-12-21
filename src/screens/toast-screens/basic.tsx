import React from "react";
import { Button, useToast } from "native-base";
import { Wrapper } from "../../components";

export const ToastUsage = function () {
  const { setToast } = useToast();

  return (
    <Wrapper>
      <Button
        onPress={() => {
          setToast({
            position: "top",
            title: "Hey! Toast here",
          });
        }}
      >
        Bottom
      </Button>
    </Wrapper>
  );
};
