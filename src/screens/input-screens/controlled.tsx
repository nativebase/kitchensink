import React from "react";

import { Input } from "native-base";
import { Wrapper } from "../../components";

export const InputControlled = (props: any) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event: any) => setValue(event.target.value);
  return (
    <Wrapper {...props}>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Value Controlled Input"
      />
    </Wrapper>
  );
};
