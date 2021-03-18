import React from "react";
import { Heading, Link, View, Text, Box } from "native-base";
import { Wrapper } from "../../components";

export const LinkComposite = (props: any) => {
  return (
    <Wrapper {...props}>
      <View>
        <Heading>Composite Link Example</Heading>
        <Link href="https://nativebase.io" isExternal mt={4}>
          <Box my={3} p={8} bg="seagreen">
            <Text color="white" fontSize={16}>
              Box
            </Text>
          </Box>
          Clicking anywhere will trigger the link
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
