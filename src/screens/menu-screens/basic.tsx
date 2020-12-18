import React from "react";
import { Menu, MenuItem, Divider, IconButton, Icon } from "native-base";
import { Wrapper } from "../../components";

export const MenuUsage = function () {
  return (
    <Wrapper>
      <Menu
        trigger={(triggerProps: any) => {
          return (
            <IconButton
              icon={<Icon name="menu" />}
              {...triggerProps}
              bg="teal.200"
            />
          );
        }}
      >
        <MenuItem disabled>Menu item 1</MenuItem>
        <MenuItem>Menu item 2</MenuItem>
        <MenuItem disabled>Menu item 3</MenuItem>
        <Divider />
        <MenuItem>Menu item 4</MenuItem>
      </Menu>
    </Wrapper>
  );
};
