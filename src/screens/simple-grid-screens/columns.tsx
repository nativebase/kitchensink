import { SimpleGrid, Box } from "native-base";
import React from "react";
import { Wrapper } from "../../components";

const items = 12;
const data = Array(items).fill(0);

export const SimpleGridColumns = function (props: any) {
  return (
    <Wrapper {...props}>
      <SimpleGrid columns={3} spacing={4}>
        {data.map((_item, index) => {
          return <Box key={index} bg="#d1d1d1" height={100} width={100} />;
        })}
      </SimpleGrid>
    </Wrapper>
  );
};
