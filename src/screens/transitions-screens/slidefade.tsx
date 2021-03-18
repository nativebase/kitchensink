import React from "react";
import { SlideFade, Button, Box } from "native-base";
import { Wrapper } from "../../components";
export const TransitionSlideFade = function (props: any) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Wrapper {...props}>
      <Button onPress={() => setIsOpen(!isOpen)}>
        Click Me to {isOpen ? "hide" : "show"}
      </Button>
      <SlideFade in={isOpen}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md">
          SlideFade
        </Box>
      </SlideFade>
    </Wrapper>
  );
};
