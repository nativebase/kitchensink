import React from "react";
import { Avatar, HStack } from "native-base";
import { Wrapper } from "../../components";

export const AvatarUsage = function () {
  return (
    <Wrapper>
      <HStack space={2}>
        <Avatar
          borderWidth={1}
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
          }}
        >
          SS
        </Avatar>
        <Avatar
          borderWidth={1}
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
          }}
        >
          GG
        </Avatar>
        <Avatar
          borderWidth={1}
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
          }}
        >
          RS
        </Avatar>
        <Avatar
          borderWidth={1}
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
          }}
        >
          AK
        </Avatar>
        <Avatar
          borderWidth={1}
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/983582580372004864/h9ccP0Ea_400x400.jpg",
          }}
        >
          SC
        </Avatar>
        <Avatar
          borderWidth={1}
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
          }}
        >
          MR
        </Avatar>
      </HStack>
    </Wrapper>
  );
};
