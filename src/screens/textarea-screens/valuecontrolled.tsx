import React, { useState } from "react";
import { TextArea, Heading, Center, Text, Stack } from "native-base";
import { Wrapper } from "../../components";

export const TextAreaValueControlled = function (props: any) {
  const [textAreaValue, setTextAreaValue] = useState("Value Controlled");
  const demoValueControlledTextArea = (e: any) => {
    setTextAreaValue(e.currentTarget.value);
  };
  return (
    <Wrapper {...props}>
      <Stack space={4}>
        <Center>
          <Heading>TextArea</Heading>
        </Center>
        <Center>
          <Text>Value Controlled TextArea</Text>
        </Center>
        <TextArea
          w="90%"
          value={textAreaValue}
          onChange={demoValueControlledTextArea}
        />
      </Stack>
    </Wrapper>
  );
};
