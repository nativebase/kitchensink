import React from "react";
import { Tag, Avatar } from "native-base";
import { Wrapper } from "../../components";

export const TagCustom = function () {
  return (
    <Wrapper>
      <Tag colorScheme="emerald" size="sm" rounded={"full"}>
        <Avatar
          mr={2}
          source={{
            uri: "https://nativebase.io/assets/img/front-page-icon.png",
          }}
          width={6}
          height={6}
        />
        Nativebase
      </Tag>
    </Wrapper>
  );
};
