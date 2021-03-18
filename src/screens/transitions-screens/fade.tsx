import React from "react";
import { Fade, Button, Box } from "native-base";
import { Wrapper } from "../../components";
export const TransitionFade = function (props: any) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Wrapper {...props}>
      <Button onPress={() => setIsOpen(!isOpen)}>
        Click Me to {isOpen ? "hide" : "show"}
      </Button>
      <Fade in={isOpen}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md">
          Fade
        </Box>
      </Fade>
    </Wrapper>
  );
};
