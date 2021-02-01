import React from 'react';
import {
  Button,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  useDisclose,
} from 'native-base';

import { Wrapper } from '../../components';
export const ActionsheetUsage = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Wrapper>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionsheetContent>
          <ActionsheetHeader>Header</ActionsheetHeader>
          <ActionsheetItem>Option 1</ActionsheetItem>
          <ActionsheetItem>Option 2</ActionsheetItem>
          <ActionsheetItem>Option 3</ActionsheetItem>
        </ActionsheetContent>
        <ActionsheetFooter>
          <ActionsheetItem onPress={onClose}>Cancel</ActionsheetItem>
        </ActionsheetFooter>
      </Actionsheet>
    </Wrapper>
  );
};
