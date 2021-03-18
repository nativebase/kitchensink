import { SimpleGrid, Box } from "native-base";
import React from "react";
import { Wrapper } from "../../components";

const items = 12;
const data = Array(items).fill(0);

export const SimpleGridMinChildWidth = function (props: any) {
  return (
    <Wrapper {...props}>
      <SimpleGrid minChildWidth={60} spacing={4}>
        {data.map((_item, index) => {
          return <Box key={index} bg="#d2d2d2" height={60} width={60} />;
        })}
      </SimpleGrid>
    </Wrapper>
  );
};
