import React from "react";
import { Box, Image } from "native-base";
import { Wrapper } from "../../components";
export const ImageRef = function () {
  const myRef: any = React.useRef({});
  React.useEffect(() => {
    myRef?.current.setNativeProps({ borderWidth: 10, opacity: 0.5 });
  }, [myRef]);
  return (
    <Wrapper>
      <Box size={200}>
        <Image
          ref={myRef}
          source={{
            uri: "https://nativebase.github.io/img/native-base-icon.png",
          }}
          alt="nativebase logo"
        />
      </Box>
    </Wrapper>
  );
};
