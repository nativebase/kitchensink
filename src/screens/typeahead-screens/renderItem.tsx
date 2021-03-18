import React from "react";
import { Typeahead, Box, Text, Icon, Heading, useColorMode } from "native-base";
import { Wrapper } from "../../components";

export const TypeaheadRenderItem = function (props: any) {
  let countries = [
    { name: "Afghanistan", abbr: "AFG" },
    { name: "Australia", abbr: "AUS" },
    { name: "India", abbr: "IND" },
    { name: "USA", abbr: "USA" },
    { name: "Germany", abbr: "GER" },
    { name: "France", abbr: "FRA" },
    { name: "Iceland", abbr: "ICL" },
    { name: "Russia", abbr: "RUS" },
    { name: "Japan", abbr: "JAP" },
    { name: "China", abbr: "CHI" },
    { name: "Denmark", abbr: "DEN" },
    { name: "Norway", abbr: "NOR" },
  ];

  const { colorMode } = useColorMode();
  return (
    <Wrapper {...props}>
      <Box>
        <Heading>Typeahead</Heading>
        <Typeahead
          mt={4}
          size="2xl"
          numberOfItems={6}
          options={countries}
          getOptionLabel={(country: any) => country.name}
          renderItem={(item: any) => {
            return (
              <Box
                flex={1}
                bg={colorMode === "light" ? "red.100" : "gray.600"}
                p={4}
              >
                <Text>{item}</Text>
              </Box>
            );
          }}
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
