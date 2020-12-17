import React from "react";
import { Button } from "native-base";
import { Wrapper } from "../../components";

export const ButtonWithRef = function () {
  const myRef: any = React.useRef({});
  React.useEffect(() => {
    myRef?.current.setNativeProps({
      borderWidth: 10,
      opacity: 0.5,
      borderRadius: 10,
    });
  }, [myRef]);
  return (
    <Wrapper>
      <Button size="sm" colorScheme="gray" variant={"solid"} ref={myRef}>
        Button
      </Button>
    </Wrapper>
  );
};
