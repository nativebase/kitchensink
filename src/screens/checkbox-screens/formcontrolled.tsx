import React from "react";
import { FormControl, Checkbox, VStack, Text, Container } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxFormControlled = function (props: any) {
  const [groupValue, setGroupValue] = React.useState(["Item 1 ", "Item 3 "]);
  return (
    <Wrapper {...props}>
      <Container>
        <FormControl isRequired isInvalid>
          <FormControl.Label>Select Item</FormControl.Label>
          <Checkbox.Group
            colorScheme="green"
            defaultValue={groupValue}
            onChange={(values: any) => {
              setGroupValue(values || []);
            }}
            alignItems="flex-start"
          >
            <Checkbox value="Item 1 ">
              <Text mx={2}>Item 1</Text>
            </Checkbox>
            <Checkbox value="Item 2 ">
              <Text mx={2}>Item 2</Text>
            </Checkbox>
            <Checkbox value="Item 3 ">
              <Text mx={2}>Item 3</Text>
            </Checkbox>
            <Checkbox
              colorScheme="orange"
              isIndeterminate
              value="Indeterminate Item "
            >
              <Text mx={2}>Indeterminate Item</Text>
            </Checkbox>
          </Checkbox.Group>
          <FormControl.HelperText>
            We'll keep this between us.
          </FormControl.HelperText>
          <FormControl.ErrorMessage>
            Something is wrong.
          </FormControl.ErrorMessage>
        </FormControl>

        <VStack mt={3} alignItems="baseline">
          <Text fontSize="md">Selected Values: </Text>
          <Text fontSize="md" bold>
            {groupValue}
          </Text>
        </VStack>
      </Container>
    </Wrapper>
  );
};
