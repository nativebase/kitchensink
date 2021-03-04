import React from 'react';
import { Icon } from 'native-base';
import { Wrapper } from '../../components';

export const IconUsage = function () {
  return (
    <Wrapper>
      <Icon name='menu' type='MaterialIcons' />
      <Icon type='Ionicons' name='md-checkmark-circle' />
      <Icon name='stepforward' type='AntDesign' />
    </Wrapper>
  );
};
