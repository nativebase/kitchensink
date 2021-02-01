import React from 'react';
import { HStack, IconButton, Icon } from 'native-base';
import { Wrapper } from '../../components';
import { ScrollView } from 'react-native';
export const IconButtonSize = function () {
  return (
    <Wrapper>
      <HStack space={4}>
        {[8, 10, 12].map((size: any) => (
          <IconButton
            key={size}
            size={size}
            variant='solid'
            colorScheme='blue'
            icon={<Icon name={'menu'} />}
          />
        ))}
      </HStack>
    </Wrapper>
  );
};
