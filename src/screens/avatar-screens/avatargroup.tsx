import React from "react";
import { Avatar } from "native-base";
import { Wrapper } from "../../components";

export const AvatarGroupExample = function (props: any) {
  return (
    <Wrapper {...props}>
      <Avatar.Group size="lg" max={4}>
        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
          }}
        >
          SS
        </Avatar>
        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
          }}
        >
          AK
        </Avatar>
        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
          }}
        >
          RS
        </Avatar>
        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
          }}
        >
          MR
        </Avatar>
        <Avatar source={{ uri: "https://bit.ly/code-beast" }}>CB</Avatar>
        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
          }}
        >
          GG
        </Avatar>
      </Avatar.Group>
    </Wrapper>
  );
};
