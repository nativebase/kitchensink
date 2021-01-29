import React from "react";
import {
  Button,
  useOverlay,
  VStack,
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
} from "native-base";
import { Wrapper } from "../../components";

export const OverlayUsage = function () {
  const { closeOverlay, setOverlay } = useOverlay();

  return (
    <Wrapper>
      <VStack space={3}>
        <Button
          onPress={() =>
            setOverlay(
              <Alert status="warning">
                <AlertIcon />
                <AlertDescription> Sample Warning message</AlertDescription>
                <CloseButton
                  onPress={closeOverlay}
                  position="absolute"
                  right="8px"
                />
              </Alert>,
              {
                position: "top",
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
