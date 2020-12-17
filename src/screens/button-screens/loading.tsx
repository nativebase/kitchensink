import React from "react";
import { Button, HStack } from "native-base";
import { Wrapper } from "../../components";

export const ButtonLoading = function () {
  return (
    <Wrapper>
      <HStack space={2}>
        <Button colorScheme="teal" isLoading>
          Button
        </Button>
        <Button colorScheme="teal" isLoading isLoadingText="Submitting">
          Button
        </Button>
        <Button
          colorScheme="teal"
          isLoading
          isLoadingText="Submitting"
          variant="outline"
        >
          Button
        </Button>
      </HStack>
    </Wrapper>
  );
};
