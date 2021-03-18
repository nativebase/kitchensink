import React from "react";
import { Popover, Button } from "native-base";
import { Wrapper } from "../../components";

export const PopoverUsage = function (props: any) {
  return (
    <Wrapper {...props}>
      <Popover>
        <Popover.Trigger>
          <Button>Trigger</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.CloseButton />
          <Popover.Header>Confirmation!</Popover.Header>
          <Popover.Body>
            Are you sure you want to have that milkshake?
          </Popover.Body>
        </Popover.Content>
      </Popover>
    </Wrapper>
  );
};
