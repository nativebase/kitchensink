import React from "react";
import { Slide, Button, Box, Center, Heading } from "native-base";
import { Wrapper } from "../../components";
export const TransitionSlideComposition = function () {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Wrapper>
      <Box width="90%" height="50%" alignItems="center" justifyContent="center">
        <Heading fontSize="xs">
          This is an example to show how slider can be used.
        </Heading>
        <Button my={2} onPress={() => setIsOpen(!isOpen)}>
          Click Me to {isOpen ? "hide" : "show"}
        </Button>
        <Center>
          The Force is strong with this one. I have you now. Look, I ain't in
          this for your revolution, and I'm not in it for you, Princess. I
          expect to be well paid. I'm in it for the money. What!? Hey, Luke! May
          the Force be with you. Remember, a Jedi can feel the Force flowing
          through him. All right. Well, take care of yourself, Han. I guess
          that's what you're best at, ain't it? In my experience, there is no
          such thing as luck. Kid, I've flown from one side of this galaxy to
          the other. I've seen a lot of strange stuff, but I've never seen
          anything to make me believe there's one all-powerful Force controlling
          everything. There's no mystical energy field that controls my destiny.
          It's all a lot of simple tricks and nonsense.
        </Center>
      </Box>
      <Slide in={isOpen}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md">
          Slide
        </Box>
      </Slide>
    </Wrapper>
  );
};
