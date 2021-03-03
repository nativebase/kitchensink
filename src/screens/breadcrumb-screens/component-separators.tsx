import React from "react";
import { Breadcrumb, Box, Heading, Icon } from "native-base";
import { Wrapper } from "../../components";
export const BreadCrumbComponentSeparator = function () {
  return (
    <Wrapper>
      <Box>
        <Heading mb={4}>BreadCrumb with Custom Separator</Heading>
        <Breadcrumb
          spacing={1}
          separator={<Icon name="keyboard-arrow-right" size={5} />}
        >
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
