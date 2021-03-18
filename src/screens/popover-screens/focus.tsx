import React from "react";
import { Popover, Button, Input } from "native-base";
import type { TextInput } from "react-native";
import { Wrapper } from "../../components";

export const PopoverRef = function (props: any) {
  const initialFocusRef = React.useRef<TextInput>(null);
  return (
    <Wrapper {...props}>
      <Popover initialFocusRef={initialFocusRef} closeOnBlur={false}>
        <Popover.Trigger>
          <Button>Trigger</Button>
        </Popover.Trigger>
        <Popover.Content width={250}>
          <Popover.CloseButton />
          <Popover.Header fontSize={20} fontWeight={700}>
            Header
          </Popover.Header>
          <Popover.Body>
            <Input
              mb={3}
              backgroundColor="white"
              ref={initialFocusRef}
              placeholder="I will get focused on Popover opening"
            />
            This Popover won't close on clicking outside the popover area.
          </Popover.Body>
          <Popover.Footer>This is the footer</Popover.Footer>
        </Popover.Content>
      </Popover>
    </Wrapper>
  );
};
