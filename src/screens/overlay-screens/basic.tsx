import React from "react";
import { Button, useOverlay, VStack, CloseButton, Box } from "native-base";
import { Wrapper } from "../../components";

export const OverlayUsage = function () {
  const { closeOverlay, setOverlay } = useOverlay();

  return (
    <Wrapper>
      <VStack space={3}>
        <Button
          onPress={() =>
            setOverlay(
              <Button onPress={closeOverlay}>Press to close Overlay</Button>,
              {
                position: "center",
                closeOnPress: true,
                // disableOverlay: true,
              }
            )
          }
        >
          Show Overlay
        </Button>
      </VStack>
    </Wrapper>
  );
};
