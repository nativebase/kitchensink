import React from 'react';
import { View, useColorModeValue } from 'native-base';

export const Wrapper = function ({ children }: any) {
  return (
    <View
      flex={1}
      height='100%'
      width='100%'
      justifyContent='center'
      alignItems='center'
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      {children}
    </View>
  );
};
