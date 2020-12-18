import React from "react";
import { Heading, Link, View, Box } from "native-base";
import { Wrapper } from "../../components";

export const LinkOnpress = () => {
  const [state, setState] = React.useState(false);
  const toggleState = () => {
    setState(!state);
  };
  return (
    <Wrapper>
      <View>
        <Heading>Custom onClick Functionality</Heading>
        <Link onClick={toggleState} mt={4}>
          Click here to toggle the color of box.
        </Link>
        <Box h="100" w="100" bg={state ? "orange.300" : "blue.300"} />
      </View>
    </Wrapper>
  );
};
