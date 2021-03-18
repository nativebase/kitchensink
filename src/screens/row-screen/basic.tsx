import React from "react";
import { Select } from "native-base";
import { Wrapper } from "../../components";

export const RowUsage = function (props: any) {
  let [language, setLanguage] = React.useState<string>("");
  return (
    <Wrapper {...props}>
      <Select
        selectedValue={language}
        minWidth={200}
        onValueChange={(itemValue: string) => setLanguage(itemValue)}
      >
        <Select.Item label="JavaScript" value="js" />
        <Select.Item label="TypeScript" value="ts" />
        <Select.Item label="C" value="c" />
        <Select.Item label="Python" value="py" />
        <Select.Item label="Java" value="java" />
      </Select>
    </Wrapper>
  );
};
