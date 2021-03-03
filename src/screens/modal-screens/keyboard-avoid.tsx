import React from "react";
import { Modal, Button, Input, VStack, Text } from "native-base";
import { Wrapper } from "../../components";

export const ModalKeyboardAvoid = function () {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Wrapper>
      <Modal
        isCentered
        isOpen={modalVisible}
        onClose={setModalVisible}
        avoidKeyboard
      >
        <Modal.Content>
          {/* <Modal.CloseButton /> */}
          <Modal.Header fontSize="4xl" fontWeight="bold">
            Hello World
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            Accusamus?
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme="blue" mr={1}>
              Save
            </Button>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <VStack space={2}>
        <Button
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Open Modal
        </Button>
        <Text>
          Open modal and focus on the input element to see the effect.
        </Text>
      </VStack>
    </Wrapper>
  );
};
