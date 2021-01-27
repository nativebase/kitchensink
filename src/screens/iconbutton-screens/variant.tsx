import React from "react";
import { HStack, IconButton, Icon } from "native-base";
import { Wrapper } from "../../components";
import { ScrollView } from "react-native";
export const IconButtonVariant = function () {
  return (
    <Wrapper>
      <ScrollView horizontal>
      <HStack space={4}>
        {["outline", "solid", "ghost"].map((variant: any) => (
          <IconButton
            variant={variant}
            colorScheme="teal"
            icon={<Icon name={"menu"} size={"lg"} />}
          />
        ))}
      </HStack>
      </ScrollView>
    </Wrapper>
  );
};
