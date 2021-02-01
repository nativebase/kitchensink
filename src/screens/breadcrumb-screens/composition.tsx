import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
