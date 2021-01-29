import React from "react";
import { Button, useOverlay, VStack } from "native-base";
import { Wrapper } from "../../components";

export const OverlayCustomized = function () {
  const [disableOverlay, setDisableOverlay] = React.useState(false);
  const { closeOverlay, setOverlay } = useOverlay();

  return (
    <Wrapper>
      <VStack space={3}>
        <Button
          onPress={() =>
            setOverlay(
              <Button onPress={closeOverlay}>Press to close Overlay</Button>,
              { disableOverlay, position: "bottom", backgroundColor: "#5511ff44" }
            )
          }
        >
          Show Overlay
        </Button>
        <Button
          onPress={() => {
            setDisableOverlay(!disableOverlay);
          }}
        >
          {disableOverlay ? "Enable " : "Disable "}Overlay
        </Button>
        <Button onPress={closeOverlay}>Hide Overlay</Button>
      </VStack>
    </Wrapper>
  );
};
