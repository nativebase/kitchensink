import React from 'react';
import { AspectRatio, Box } from 'native-base';
import { Wrapper } from '../../components';
export const AspectRatioUsage = function () {
  return (
    <Wrapper>
      <AspectRatio height={200} bg='black'>
        <Box bg='red.400' />
      </AspectRatio>
    </Wrapper>
  );
};
