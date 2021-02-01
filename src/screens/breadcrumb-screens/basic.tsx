import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
} from 'native-base';
import { Wrapper } from '../../components';
export const BreadCrumbUsage = function () {
  return (
    <Wrapper>
      <Box>
        <Heading mb={4}>This is a Default BreadCrumb</Heading>
        <Breadcrumb>
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
