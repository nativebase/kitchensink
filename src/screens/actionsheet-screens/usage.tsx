import React from "react";
import { Button, Actionsheet, useDisclose } from "native-base";

import { Wrapper } from "../../components";
export const ActionsheetUsage = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Wrapper>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Header>Header</Actionsheet.Header>
          <Actionsheet.Item>Option 1</Actionsheet.Item>
          <Actionsheet.Item>Option 2</Actionsheet.Item>
          <Actionsheet.Item>Option 3</Actionsheet.Item>
        </Actionsheet.Content>
        <Actionsheet.Footer>
          <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
        </Actionsheet.Footer>
      </Actionsheet>
    </Wrapper>
  );
};
