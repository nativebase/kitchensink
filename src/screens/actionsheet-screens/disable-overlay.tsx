import React from "react";
import { Button, Actionsheet, useDisclose } from "native-base";

import { Wrapper } from "../../components";
export const ActionsheetDisableOverlay = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Wrapper {...props}>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
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
