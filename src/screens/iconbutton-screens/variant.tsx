import React from 'react';
import { HStack, IconButton, Icon } from 'native-base';
import { Wrapper } from '../../components';
export const IconButtonVariant = function () {
  return (
    <Wrapper>
      <HStack space={4}>
        {['outline', 'solid', 'ghost'].map((variant: any) => (
          <IconButton
            variant={variant}
            colorScheme='teal'
            icon={<Icon name={'menu'} />}
          />
        ))}
      </HStack>
    </Wrapper>
  );
};
