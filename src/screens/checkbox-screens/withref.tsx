import React from "react";
import { Checkbox, Icon } from "native-base";
import { Wrapper } from "../../components";

export const CheckboxWithRef = function () {
  const myRef: any = React.useRef({});
  return (
    <Wrapper>
      <Checkbox
        value="success"
        colorScheme="success"
        icon={
          <Icon name="bullseye" type="MaterialCommunityIcons" opacity={0} />
        }
        ref={myRef}
        onChange={(_: any, state: any) => {
          if (state)
            myRef?.current.setNativeProps({ backgroundColor: "#00de0050" });
          else
            myRef?.current.setNativeProps({
              backgroundColor: "#fa000050",
            });
        }}
      >
        {" "}
        label
      </Checkbox>
    </Wrapper>
  );
};
