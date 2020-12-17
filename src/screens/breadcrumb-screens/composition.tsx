import React from "react";
import {
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  Box,
  Heading,
} from "native-base";
import { Wrapper } from "../../components";
export const BreadCrumbComposition = function () {
  return (
    <Wrapper>
      <Box>
        <Heading mb={4}>BreadCrumb Composition</Heading>
        <BreadCrumb spacing={2} fontSize="lg" color="green.500">
          <BreadCrumbItem isCurrentPage>
            <BreadCrumbLink>Home (This is currently active)</BreadCrumbLink>
          </BreadCrumbItem>
          <BreadCrumbItem>
            <BreadCrumbLink>Docs</BreadCrumbLink>
          </BreadCrumbItem>
          <BreadCrumbItem>
            <BreadCrumbLink
              href="https://github.com/GeekyAnts/nativebase-v3"
              isExternal
            >
              Github
            </BreadCrumbLink>
          </BreadCrumbItem>
        </BreadCrumb>
      </Box>
    </Wrapper>
  );
};
