import React from "react";
import { Checkbox, Heading, HStack, Text, View } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxGroupExample = function (props: any) {
  const [groupValue, setGroupValue] = React.useState(["Item 1 ", "Item 3 "]);
  return (
    <Wrapper {...props}>
      <View display="flex" justifyContent="space-between" alignItems="center">
        <HStack mb={2} alignItems="baseline">
          <Heading mt={3}>CheckboxGroup </Heading>
        </HStack>
        <Checkbox.Group
          colorScheme="green"
          defaultValue={groupValue}
          onChange={(values: any) => {
            setGroupValue(values || []);
          }}
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
        <HStack mt={3} alignItems="baseline">
          <Text fontSize="md">Selected Values: </Text>
          <Text fontSize="md" bold>
            {groupValue}
          </Text>
        </HStack>
      </View>
    </Wrapper>
  );
};
