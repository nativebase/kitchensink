import React from "react";

import { Input, Button } from "native-base";
import { Wrapper } from "../../components";

export const InputPassword = (props: any) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Wrapper {...props}>
      <Input
        w="70%"
        type={show ? "text" : "password"}
        InputRightElement={
          <Button ml={1} onPress={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        }
        placeholder="Password"
      />
    </Wrapper>
  );
};
