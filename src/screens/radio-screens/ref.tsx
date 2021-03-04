import React from "react";
import { Radio, Icon } from "native-base";
import { Wrapper } from "../../components";

export const RadioRef = function () {
  const myRef: any = React.useRef({});

  return (
    <Wrapper>
      <Radio.Group
        name="exampleGroup"
        colorScheme="success"
        onChange={(value: any) => {
          if (value === "2")
            myRef?.current.setNativeProps({ backgroundColor: "#00de0050" });
          else
            myRef?.current.setNativeProps({
              backgroundColor: "#fa000050",
            });
        }}
      >
        <Radio
          colorScheme="success"
          icon={
            <Icon name="bullseye" type="MaterialCommunityIcons" opacity={0} />
          }
          value="1"
        >
          Wrong
        </Radio>
        <Radio
          colorScheme="success"
          icon={
            <Icon name="bullseye" type="MaterialCommunityIcons" opacity={0} />
          }
          ref={myRef}
          value="2"
        >
          Correct
        </Radio>
      </Radio.Group>
    </Wrapper>
  );
};
