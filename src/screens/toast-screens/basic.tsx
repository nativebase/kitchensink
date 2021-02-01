import React from 'react';
import { Button, useToast } from 'native-base';
import { Wrapper } from '../../components';

export const ToastUsage = function () {
  const toast = useToast();

  return (
    <Wrapper>
      <Button
        onPress={() => {
          toast({
            position: 'center',
            title: 'Toast Top',
          });
        }}
      >
        Button
      </Button>
    </Wrapper>
  );
};
