import React from "react";
import { Heading, Link, View, Text, Box } from "native-base";
import { Wrapper } from "../../components";

export const LinkComposite = () => {
  return (
    <Wrapper>
      <View>
        <Heading>Composite Link Example</Heading>
        <Link href="https://nativebase.io" isExternal mt={4}>
          <Box my={3} p={8} bg="seagreen">
            <Text color="white" fontSize={16}>
              Box
            </Text>
          </Box>
          <Text>Clicking anywhere will trigger the link</Text>
          <Box my={3} p={8} bg="blue.300">
            <Text color="white" fontSize={16}>
              Box
            </Text>
          </Box>
        </Link>
      </View>
    </Wrapper>
  );
};
