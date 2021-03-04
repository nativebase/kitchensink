import React from "react";
import { Radio, Text, FormControl, Container } from "native-base";
import { Wrapper } from "../../components";

export const RadioFormControlled = function () {
  return (
    <Wrapper>
      <Container>
        <FormControl isRequired isInvalid>
          <FormControl.Label>Select One</FormControl.Label>
          <Radio.Group defaultValue="1" name="exampleGroup">
            <Radio value="1">
              <Text mx={2}>First</Text>
            </Radio>
            <Radio value="2">
              <Text mx={2}>Second</Text>
            </Radio>
            <Radio value="3">
              <Text mx={2}>Third</Text>
            </Radio>
          </Radio.Group>
          <FormControl.HelperText>
            We'll keep this between us.
          </FormControl.HelperText>
          <FormControl.ErrorMessage>
            Something is wrong.
          </FormControl.ErrorMessage>
        </FormControl>
      </Container>
    </Wrapper>
  );
};
