import React from "react";
import { Typeahead, Box, Icon, Heading } from "native-base";
import { Wrapper } from "../../components";

export const TypeaheadBasic = function (props: any) {
  let countries = [
    "Afghanistan",
    "Australia",
    "India",
    "USA",
    "Germany",
    "France",
    "Iceland",
    "Russia",
    "Japan",
    "China",
    "Denmark",
    "Norway",
  ];

  return (
    <Wrapper {...props}>
      <Box>
        <Heading>Typeahead</Heading>
        <Typeahead
          mt={4}
          size="2xl"
          numberOfItems={6}
          options={countries}
          toggleIcon={({ isOpen }: any) => {
            return isOpen ? (
              <Icon name="arrow-drop-up" type="MaterialIcons" size={12} />
            ) : (
              <Icon name="arrow-drop-down" type="MaterialIcons" size={12} />
            );
          }}
        />
      </Box>
    </Wrapper>
  );
};
