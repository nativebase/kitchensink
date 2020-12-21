import React from "react";
import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Button,
} from "native-base";
import { Wrapper } from "../../components";

export const PopoverSize = function () {
  return (
    <Wrapper>
      <Popover size="lg">
        <PopoverTrigger>
          <Button>Trigger for size</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>
            Are you sure you want to have that milkshake?
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Wrapper>
  );
};
