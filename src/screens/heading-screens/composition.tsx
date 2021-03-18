import React from "react";
import { Box, Text, Button, Heading } from "native-base";
import { Wrapper } from "../../components";

export const HeadingComposition = function (props: any) {
  return (
    <Wrapper {...props}>
      <Box>
        <Heading mb={4}>Modern online and offline payments for Africa</Heading>
        <Text fontSize="xl">
          Paystack helps businesses in Africa get paid by anyone, anywhere in
          the world
        </Text>
        <Button size="lg" colorScheme="green" mt="24px">
          Create a free account
        </Button>
      </Box>
    </Wrapper>
  );
};
