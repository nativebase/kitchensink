import React from "react";
import { Checkbox, HStack, Text } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxColor = function () {
  return (
    <Wrapper>
      <HStack>
        <Checkbox value="critical" colorScheme="critical" defaultIsChecked>
          <Text mx={2}>Critical</Text>
        </Checkbox>
        <Checkbox value="info" colorScheme="info" defaultIsChecked>
          <Text mx={2}>Info</Text>
        </Checkbox>
        <Checkbox value="orange" colorScheme="orange" defaultIsChecked>
          <Text mx={2}>Orange</Text>
        </Checkbox>
        <Checkbox value="purple" colorScheme="purple" defaultIsChecked>
          <Text mx={2}>Purple</Text>
        </Checkbox>
      </HStack>
    </Wrapper>
  );
};
