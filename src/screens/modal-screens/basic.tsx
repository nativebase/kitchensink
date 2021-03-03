import React from "react";
import { Modal, Button, Center, Input } from "native-base";
import { Wrapper } from "../../components";

export const ModalUsage = function () {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Wrapper>
      <Modal
        isCentered
        isOpen={modalVisible}
        onClose={setModalVisible}
        overlayVisible={true}
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
      <Center>
        <Button
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Open Modal
        </Button>
      </Center>
    </Wrapper>
  );
};
