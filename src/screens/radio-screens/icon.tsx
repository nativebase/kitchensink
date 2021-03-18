import React from "react";
import { Radio, Text, Icon } from "native-base";
import { Wrapper } from "../../components";

export const RadioIcon = function (props: any) {
  return (
    <Wrapper {...props}>
      <Radio.Group defaultValue="1" size="lg" name="exampleGroup">
        <Radio
          colorScheme="green"
          value="1"
          icon={<Icon name="alien" type="MaterialCommunityIcons" />}
        >
          <Text mx={2}>Alien</Text>
        </Radio>
        <Radio
          colorScheme="red"
          value="2"
          icon={<Icon name="fire" type="MaterialCommunityIcons" />}
        >
          <Text mx={2}>Fire</Text>
        </Radio>
        <Radio
          colorScheme="warning"
          value="3"
          icon={<Icon name="exclamation" type="MaterialCommunityIcons" />}
        >
          <Text mx={2}>Warning</Text>
        </Radio>
      </Radio.Group>
    </Wrapper>
  );
};
