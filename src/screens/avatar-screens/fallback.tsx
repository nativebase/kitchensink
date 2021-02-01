import React from 'react';
import { Avatar, HStack } from 'native-base';
import { Wrapper } from '../../components';

export const AvatarFallback = function () {
  return (
    <Wrapper>
      <HStack>
        <Avatar
          mr={1}
          name='Rohit'
          source={{ uri: 'https://bit.ly/broken-link' }}
        />
        <Avatar name='Rehman' source={{ uri: 'https://bit.ly/broken-link' }} />
        <Avatar source={{ uri: 'https://bit.ly/broken-link' }} />
      </HStack>
    </Wrapper>
  );
};
