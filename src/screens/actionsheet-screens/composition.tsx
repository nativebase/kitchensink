import React from 'react';
import {
  Button,
  Divider,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  useDisclose,
} from 'native-base';
import { Wrapper } from '../../components';
export const ActionsheetComposition = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Wrapper>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionsheetContent>
          <ActionsheetHeader>Header</ActionsheetHeader>
          <ActionsheetItem>Option 1</ActionsheetItem>
          <Divider />
          <ActionsheetItem>Option 2</ActionsheetItem>
          <Divider />
          <ActionsheetItem>Option 3</ActionsheetItem>
        </ActionsheetContent>
        <ActionsheetFooter>
          <ActionsheetItem onPress={onClose}>Cancel</ActionsheetItem>
        </ActionsheetFooter>
      </Actionsheet>
    </Wrapper>
  );
};
