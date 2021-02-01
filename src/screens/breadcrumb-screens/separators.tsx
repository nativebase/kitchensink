import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
} from 'native-base';
import { Wrapper } from '../../components';
export const BreadCrumbSeparators = function () {
  return (
    <Wrapper>
      <Box>
        <Heading mb={4}>BreadCrumb with String Separator</Heading>
        <Breadcrumb bold italic separator='-'>
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
