import React from "react";
import { Button, Divider, Actionsheet, useDisclose } from "native-base";
import { Wrapper } from "../../components";
export const ActionsheetComposition = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Wrapper>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Header>Header</Actionsheet.Header>
          <Actionsheet.Item>Option 1</Actionsheet.Item>
          <Divider />
          <Actionsheet.Item>Option 2</Actionsheet.Item>
          <Divider />
          <Actionsheet.Item>Option 3</Actionsheet.Item>
        </Actionsheet.Content>
        <Actionsheet.Footer>
          <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
        </Actionsheet.Footer>
      </Actionsheet>
    </Wrapper>
  );
};
