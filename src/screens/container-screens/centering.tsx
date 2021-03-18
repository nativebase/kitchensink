import React from "react";
import { Container, Text, Heading } from "native-base";
import { Wrapper } from "../../components";
export const ContainerCentering = function (props: any) {
  return (
    <Wrapper {...props}>
      <Container centerContent>
        <Heading>Benefits</Heading>
        <Text>
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production
        </Text>
      </Container>
    </Wrapper>
  );
};
