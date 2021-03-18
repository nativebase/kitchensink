import React from "react";
import { AlertDialog, Button, Center } from "native-base";
import type { TouchableOpacity } from "react-native";

import { Wrapper } from "../../components";
export const AlertDialogTransition = function (props: any) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef<TouchableOpacity>(null);
  return (
    <Wrapper {...props}>
      <Center>
        <AlertDialog
          motionPreset="slide"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Discard Changes?</AlertDialog.Header>
            <AlertDialog.Body>
              Are you sure you want to discard all of your notes? 44 words will
              be deleted.
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button ref={cancelRef} onPress={onClose}>
                No
              </Button>
              <Button colorScheme="red" ml={3}>
                Yes
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
        <Button onPress={() => setIsOpen(!isOpen)}>Discard</Button>
      </Center>
    </Wrapper>
  );
};
