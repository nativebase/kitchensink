import React from "react";
import { Text } from "native-base";
import { Wrapper } from "../../components";
export const ResposiveFontSize = () => {
  return (
    <Wrapper>
      <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        This is responsive text
      </Text>
    </Wrapper>
  );
};
