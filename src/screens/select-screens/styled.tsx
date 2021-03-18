import React from "react";
import { Select, VStack, Text, Icon } from "native-base";
import { Wrapper } from "../../components";

export const SelectStyled = function (props: any) {
  let [language, setLanguage] = React.useState<string>("js");
  return (
    <Wrapper {...props}>
      <VStack alignItems="center" space={2}>
        <Select
          variant="styled"
          placeholder="Pick language"
          _placeholder={{ color: "teal.500" }}
          selectedValue={language}
          width={150}
          onValueChange={(itemValue: string) => setLanguage(itemValue)}
          selectedItemBg={"blue.500"}
          _selectedItem={{ color: "white" }}
          // isDisabled
          dropdownOpenIcon={
            <Icon name="arrow-drop-up" type="MaterialIcons" size={6} />
          }
          dropdownCloseIcon={
            <Icon name="arrow-drop-down" type="MaterialIcons" size={6} />
          }
          _item={{ color: "red.500" }}
        >
          <Select.Item label="JavaScript" value="js" />
          <Select.Item label="TypeScript" value="ts" />
          <Select.Item label="Java" value="java" />
          <Select.Item label="C" value="c" />
          <Select.Item label="Python" value="py" />
        </Select>
        <Text>{language}</Text>
      </VStack>
    </Wrapper>
  );
};
