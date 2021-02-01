import React from 'react';
import { Row, Box } from 'native-base';
import { Wrapper } from '../../components';

export const RowUsage = function () {
  return (
    <Wrapper>
      <Row justifyContent={'center'}>
        <Box h='100px' w={100} bg='green.500' />
        <Box bg='blue.300' w={100} h='100px' />
        <Box h='100px' w={100} bg='tomato' />
      </Row>
    </Wrapper>
  );
};
