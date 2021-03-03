import React from 'react';
import {
  Breadcrumb,
  Box,
  Heading,
} from 'native-base';
import { Wrapper } from '../../components';
export const BreadCrumbComposition = function () {
  return (
    <Wrapper>
      <Box>
        <Heading mb={4}>BreadCrumb Composition</Heading>
        <Breadcrumb spacing={2} fontSize='lg' color='green.500'>
          <Breadcrumb.Item isCurrentPage>
            <Breadcrumb.Link>Home (This is currently active)</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Breadcrumb.Link>Docs</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Breadcrumb.Link
              href='https://github.com/GeekyAnts/nativebase-v3'
              isExternal
            >
              Github
            </Breadcrumb.Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Box>
    </Wrapper>
  );
};
