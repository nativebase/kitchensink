import React from "react";
import { Breadcrumb, Box, Heading } from "native-base";
import { Wrapper } from "../../components";
export const BreadCrumbSeparators = function () {
  return (
    <Wrapper>
      <Box>
        <Heading mb={4}>BreadCrumb with String Separator</Heading>
        <Breadcrumb bold italic separator="-">
          <Breadcrumb.Item isCurrentPage>
            <Breadcrumb.Link>Home (This is currently active)</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Breadcrumb.Link>Docs</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Breadcrumb.Link
              href="https://github.com/GeekyAnts/nativebase-v3"
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
