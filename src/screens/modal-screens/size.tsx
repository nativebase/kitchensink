import React from "react";
import { Modal, Button, Center, Input } from "native-base";
import { Wrapper } from "../../components";

export const ModalSize = function () {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };
  return (
    <Wrapper>
      <Modal
        isCentered
        isOpen={modalVisible}
        onClose={setModalVisible}
        size={size}
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
            <Button colorScheme="blue" mr={1} mb={1}>
              Save
            </Button>
            <Button
              colorScheme="red"
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
          onPress={() => handleSizeClick("xs")}
          key={"xs"}
          m={4}
        >{`Open ${"xs"} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick("sm")}
          key={"sm"}
          m={4}
        >{`Open ${"sm"} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick("md")}
          key={"md"}
          m={4}
        >{`Open ${"md"} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick("lg")}
          key={"lg"}
          m={4}
        >{`Open ${"lg"} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick("xl")}
          key={"xl"}
          m={4}
        >{`Open ${"xl"} Modal`}</Button>
        <Button
          onPress={() => handleSizeClick("full")}
          key={"full"}
          m={4}
        >{`Open ${"full"} Modal`}</Button>
      </Center>
    </Wrapper>
  );
};
