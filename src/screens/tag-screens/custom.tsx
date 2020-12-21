import React from "react";
import {
  Tag,
  TagCloseButton,
  TagLabel,
  Avatar,
  AvatarBadge,
} from "native-base";
import { Wrapper } from "../../components";

export const TagCustom = function () {
  return (
    <Wrapper>
      <Tag colorScheme="red" rounded={100} size="md">
        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
          }}
          name={"Sanket Sahu"}
          mr={2}
        ></Avatar>
        <TagLabel>Custom Tag</TagLabel>
        <TagCloseButton />
      </Tag>
    </Wrapper>
  );
};
