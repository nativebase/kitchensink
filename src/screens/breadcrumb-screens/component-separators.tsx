import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
  Icon,
} from 'native-base';
import { Wrapper } from '../../components';
export const BreadCrumbComponentSeparator = function () {
  return (
    <Wrapper>
      <Box>
        <Heading mb={4}>BreadCrumb with Custom Separator</Heading>
        <Breadcrumb
          spacing={1}
          separator={<Icon name='keyboard-arrow-right' size={5} />}
        >
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Home (This is currently active)</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href='https://github.com/GeekyAnts/nativebase-v3'
              isExternal
            >
              Github
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Wrapper>
  );
};
