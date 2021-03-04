import React from "react";
import { Icon, Select, Box } from "native-base";
import { Wrapper } from "../../components";

export const SelectBasic = function () {
  let [language, setLanguage] = React.useState<string>("");
  return (
    <Wrapper>
      <Box width={250}>
        <Select
          placeholder="Pick language"
          selectedValue={language}
          onValueChange={(itemValue: string) => setLanguage(itemValue)}
          // itemStyle={{ fontSize: 'lg' }}
          selectedItemBg={"teal.400"}
          // isDisabled
          dropdownOpenIcon={
            <Icon name="arrow-drop-up" type="MaterialIcons" size={6} />
          }
          dropdownCloseIcon={
            <Icon name="arrow-drop-down" type="MaterialIcons" size={6} />
          }
        >
          <Select.Item label="JavaScript" value="js" />
          <Select.Item label="TypeScript" value="ts" />
          <Select.Item
            // isDisabled
            label="Java"
            value="java"
          />
        </Select>
      </Box>
    </Wrapper>
  );
};
