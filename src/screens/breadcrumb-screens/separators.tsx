import React from "react";
import { Breadcrumb, Box, Heading } from "native-base";
import { Wrapper } from "../../components";
export const BreadCrumbSeparators = function (props: any) {
  return (
    <Wrapper {...props}>
      <Box>
        <Heading mb={4}>Breadcrumb with String Separator</Heading>
        <Breadcrumb bold italic separator="-">
          <Breadcrumb.Item isCurrentPage>
            <Breadcrumb.Link>Home (This is currently active)</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
              Docs
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Breadcrumb.Link
              href="https://github.com/GeekyAnts/nativebase"
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
