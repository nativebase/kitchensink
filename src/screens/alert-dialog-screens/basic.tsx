import React from "react";
import { AlertDialog, Button } from "native-base";
import type { TouchableOpacity } from "react-native";
import { Wrapper } from "../../components";
export const AlertDialogUsage = function () {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef<TouchableOpacity>(null);
  return (
    <Wrapper>
      <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
        Delete Customer
      </Button>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset={"slide"}
        isCentered
      >
        <AlertDialog.Overlay />
        <AlertDialog.Content pt={5}>
          <AlertDialog.Header fontSize="lg" fontWeight="bold">
            Delete Customer
          </AlertDialog.Header>
          <AlertDialog.Body>
            Are you sure? You can't undo this action afterwards.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button onPress={onClose}>Cancel</Button>
            <Button colorScheme="red" onPress={onClose} ml={3}>
              Delete
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Wrapper>
  );
};
