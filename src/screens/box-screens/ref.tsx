import React from "react";
import { Box } from "native-base";
import { Wrapper } from "../../components";

export const BoxRef = function () {
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
      <Box width="100%" bg="orange.300" p={4} color="white" ref={myRef}>
        This is a Box
      </Box>
    </Wrapper>
  );
};
