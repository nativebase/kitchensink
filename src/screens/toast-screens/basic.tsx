import React from "react";
import { Button, useToast } from "native-base";
import { Wrapper } from "../../components";

export const ToastUsage = function (props: any) {
  const toast = useToast();

  return (
    <Wrapper {...props}>
      <Button
        onPress={() => {
          toast({
            position: "top",
            title: "Toast Top",
          });
        }}
      >
        Button
      </Button>
    </Wrapper>
  );
};
