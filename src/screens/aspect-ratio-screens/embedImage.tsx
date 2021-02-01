import React from 'react';
import { AspectRatio, Image } from 'native-base';
import { Wrapper } from '../../components';
export const AspectRatioEmbedImage = function () {
  return (
    <Wrapper>
      <AspectRatio ratio={0.5} height={200}>
        <Image
          resizeMode='cover'
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          alt='nativebase tiny logo'
        />
      </AspectRatio>
    </Wrapper>
  );
};
