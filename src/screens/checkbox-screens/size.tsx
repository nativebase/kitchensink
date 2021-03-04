import React from "react";
import { Checkbox, HStack, Text, Icon } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxSize = function () {
  return (
    <Wrapper>
      <HStack>
        <Checkbox value="red" colorScheme="red" size="sm" defaultIsChecked>
          <Text mx={2}>Checkbox</Text>
        </Checkbox>
        <Checkbox colorScheme="green" size="md" defaultIsChecked value="green">
          <Text mx={2}>Checkbox</Text>
        </Checkbox>
        <Checkbox
          colorScheme="yellow"
          value="yellow"
          size="lg"
          defaultIsChecked
        >
          <Text mx={2}>Checkbox</Text>
        </Checkbox>
      </HStack>
    </Wrapper>
  );
};
