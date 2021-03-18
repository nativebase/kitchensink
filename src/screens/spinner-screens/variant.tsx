import React from "react";
import { Spinner, HStack, Icon } from "native-base";
import { Wrapper } from "../../components";
export const SpinnerVariant = function (props: any) {
  return (
    <Wrapper {...props}>
      <HStack space={2}>
        <Spinner />
        <Spinner color="danger.400" variant="dotted" />
        <Spinner color="blue.500" variant="stroked" />
        <Spinner color="gray.900" variant="multiColorDotted" />
        <Spinner color="yellow.500" variant="squareDotted" />
        <Spinner
          variant="custom"
          renderProp={
            <Icon name="bat" type="MaterialCommunityIcons" size={12} />
          }
        />
      </HStack>
    </Wrapper>
  );
};
