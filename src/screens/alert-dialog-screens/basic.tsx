import React from "react";
import { AlertDialog, Button, Center } from "native-base";
import type { TouchableOpacity } from "react-native";
import { Wrapper } from "../../components";
export const AlertDialogUsage = function (props: any) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef<TouchableOpacity>(null);
  return (
    <Wrapper {...props}>
      <Center>
        <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
          Delete Customer
        </Button>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slide"
        >
          <AlertDialog.Content>
            <AlertDialog.Header _text={{ fontSize: "lg", fontWeight: "bold" }}>
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
      </Center>
    </Wrapper>
  );
};
